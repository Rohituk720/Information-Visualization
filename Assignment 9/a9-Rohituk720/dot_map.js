d3.json("la.json").then(function (us) {   
   
    
    var margin2 = {top: 0, right: 0, bottom: 0, left: 0},
    width2 = 1000 - margin2.left - margin2.right,
    height2 = 600 - margin2.top - margin2.bottom;

    var tooltip = d3.select("body").append("div").attr("class", "toolTip");

var svg3 = d3.select("#chart3").append("svg")
.attr("width", width2)
.attr("height", height2);


    const laProjection = d3.geoAlbers()
        .scale(1)
        .translate([0,0]);

    var path = d3.geoPath().projection(laProjection);
    
    const laBounds = path.bounds(us);
    const laScale = 1.2 / Math.max(
              (laBounds[1][0] - laBounds[0][0]) / width2,
              (laBounds[1][1] - laBounds[0][1]) / height2 * 0.63
            );
    const laTranslate = [
      (width2 - laScale * (laBounds[1][0] + laBounds[0][0])) / 2, 
      (height2 - laScale * (laBounds[1][1] + laBounds[0][1])) / 2
    ];

    laProjection.scale(laScale)
                .translate(laTranslate);

    svg3.append("g")
             
        .selectAll("path")       
        .data(us.features)       
        .enter()       
        .append("path")       
        .attr("d", path)
        .attr("class", "counties")       
        .attr("fill", "none")
        .attr("stroke", "grey"); 

    d3.csv("markets.csv", function(data){
        return{
            id: data.id,
            lat: data.latitude,
            long: data.longitude,
            name:data.name
        }
    }).then(function(data){
        LA_enter = svg3.selectAll("circle")
            .data(data).enter()
        
        LA_enter.append("circle")
            .attr("cx", function(d) { return laProjection([d.long, d.lat])[0];})
            .attr("cy", function(d) { return laProjection([d.long, d.lat])[1];})
            .attr("r", 3)
            .attr("class", "point")

        svg3.selectAll(".point")
            .on("mousemove", function(d){
                tooltip
                .style("left", d3.event.pageX - 50 + "px")
                .style("top", d3.event.pageY - 70 + "px")
                .style("display", "inline-block")
                .html((d.name) + "<br>" );
                  })
                      .on("mouseout", function(d){ tooltip.style("display", "none");})
            
})
});