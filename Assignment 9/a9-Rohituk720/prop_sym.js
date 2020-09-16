d3.json("world.json").then(function (world) {

    var margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = 1000 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;


var svg2 = d3.select("#chart2").append("svg")
.attr("width", width)
.attr("height", height);


    var projection = d3.geoMercator()
        .translate([width / 2, height / 2]);
    var path = d3.geoPath()
        .projection(projection); 
        var tooltip = d3.select("body").append("div").attr("class", "toolTip");
    
        var radius = d3.scaleLinear().domain([0, 9]).range([5, 30]);

    svg2.append("g")
        .selectAll("path")
        .data(topojson.feature(world, world.objects.countries).features)
        .enter().append("path")
        .attr("d", path)
        .attr("class", "countries")
.style("fill", "#ddd")
.style('stroke', 'black')
.style('stroke-width', 1)
;

    svg2.append("path")
        .attr("class", "country-borders")
        .attr("d", path(topojson.mesh(world, world.objects.countries, function (a, b) { return a !== b; })));


    d3.csv("fertility_data.csv", function(data){
        return {
            country: data.Country,
            Population: data.Value,
            lat: data.Latitude,
            long: data.Longitude
        }
    }).then(function(data){
        var data_enter = svg2.selectAll("circle")
            .data(data)
            .enter()
        
            
        data_enter.append("circle")
            .attr("cx", function(d) { return projection([d.long, d.lat])[0];})
            .attr("cy", function(d) { return projection([d.long, d.lat])[1];})
            .attr("r", function(d) { return Math.sqrt(d.Population)*8;})
            .attr("class", "symbol")  
            
        svg2.selectAll(".symbol")
        .on("mousemove", function(d){
            tooltip
            .style("left", d3.event.pageX - 50 + "px")
            .style("top", d3.event.pageY - 70 + "px")
            .style("display", "inline-block")
            .html("Country : "+(d.country) + "<br>" + "Fertility rate : "+(d.Population));
              })
                  .on("mouseout", function(d){ tooltip.style("display", "none");})
                         
                  svg2.append("text")
                  .attr("x",50)
                  .attr("y",540)
                  .text("Total fertility rate")
                  .style("font-size","15")
                  
                  var legend = svg2.append("g")
                  .attr("class", "legend")
                  .attr("transform", "translate(" + (width - 900) + "," + (height - 100) + ")")
                  .selectAll("g")
                  .data([0,2,4,6,8])
                  .enter().append("g");
                  
                  legend.append("circle")
                  .attr("cy", function(d) { return -radius(d); })
                  .attr("r", radius)
                  .style('stroke', 'grey')
                  .style('stroke-width', 1.5);
                  
                  legend.append("text")
                  .attr("x",-5)
                  .attr("y", function(d) { return -2.8* radius(d); })
                  .attr("dy", "1em")
                  .style('stroke', 'black')
                  .text(d3.format(".1s"));            
                           
        
        
    })
    
});