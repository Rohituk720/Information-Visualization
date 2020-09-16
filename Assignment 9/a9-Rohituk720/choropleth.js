d3.json("world.json").then(function (world) {
    
    
    var margin = {top: 0, right: 0, bottom: 0, left: 0},
            width = 1000 - margin.left - margin.right,
            height = 600 - margin.top - margin.bottom;

    
    var svg1 = d3.select("#chart1").append("svg")
    .attr("width", width)
    .attr("height", height);

    var projection = d3.geoMercator()
        .translate([width / 2, height / 2]);
    var path = d3.geoPath()
        .projection(projection); 
    
        var tooltip = d3.select("body").append("div").attr("class", "toolTip");

    
 
   colorscale = d3.scaleSequential(d3.interpolateReds)
   .domain([2,9]);

        
    svg1.append("text")
    .attr("x",10)
    .attr("y",340)
    .text("Total Fertility Rate")
    .style("font-size","16")
          

         var color_domain = [0, 2, 4, 6, 8]
         var legend_labels = ["<2", "2+", "4+", "6+", ">8"]
         var color = d3.scaleThreshold()
                     .domain([2,4,6,8,10])
                     .range(colorbrewer.Reds[5]);
    
                     
         var legend = svg1.selectAll("g.legend")
      .data(color_domain)
      .enter().append("g")
      .attr("class", "legend");
    
      var ls_w = 20, ls_h = 20;
    
      legend.append("rect")
      .attr("x", 80)
      .attr("y", function(d, i){ return height - (i*ls_h) - 8*ls_h;})
      .attr("width", ls_w)
      .attr("height", ls_h)
      .style("fill", function(d, i) { return color(d); })
      .style("opacity", 0.8);
    
      legend.append("text")
      .attr("x", 110)
      .attr("y", function(d, i){ return height - (i*ls_h) - 7*ls_h -4;})
      .text(function(d, i){ return legend_labels[i]; });
     
      svg1.append("g")
      .selectAll("path")
      .data(topojson.feature(world, world.objects.countries).features)
      .enter().append("path")
      .attr("class", "countries")
      .attr("d", path)

                       
      ;

  svg1.append("path")
      .attr("class", "country-borders")
      .attr("d", path(topojson.mesh(world, world.objects.countries, function (a, b) { return a !== b; })));



    d3.csv("fertility_data.csv", function(data){
        return {
            country: data.Country,
            Population: data.Value,
            lat: data.Latitude,
            long: data.Longitude,
            id: data.ID
        }
    }).then(function(data){

        for (var i = 0; i < 10; i++){
            var thisid = data[i].id;
            var thisPopulation = data[i].Population;
            var thiscountry = data[i].country;
            
            svg1.selectAll(".countries")
            .classed(thiscountry, function(data){

                    if (data.id == thisid){return true;}
                })
                .on("mousemove", function(d){
                    console.log(d.id)
                    if (d.id==004)
                    tooltip
                    .style("left", d3.event.pageX - 50 + "px")
                    .style("top", d3.event.pageY - 70 + "px")
                    .style("display", "inline-block")
                    .html(("Country : Afghanistan") + "<br>" + (" Fertility Rate : 7.45"));
                    if (d.id==36)
                    tooltip
                    .style("left", d3.event.pageX - 50 + "px")
                    .style("top", d3.event.pageY - 70 + "px")
                    .style("display", "inline-block")
                    .html(("Country : Australia") + "<br>" + (" Fertility Rate : 3.18")); 
                    if (d.id==12)
                    tooltip
                    .style("left", d3.event.pageX - 50 + "px")
                    .style("top", d3.event.pageY - 70 + "px")
                    .style("display", "inline-block")
                    .html(("Country : Algeria") + "<br>" + (" Fertility Rate : 7.278")); 
                    
                    if (d.id==24)
                    tooltip
                    .style("left", d3.event.pageX - 50 + "px")
                    .style("top", d3.event.pageY - 70 + "px")
                    .style("display", "inline-block")
                    .html(("Country : Angola") + "<br>" + (" Fertility Rate : 6")); 

                    if (d.id==356)
                    tooltip
                    .style("left", d3.event.pageX - 50 + "px")
                    .style("top", d3.event.pageY - 70 + "px")
                    .style("display", "inline-block")
                    .html(("Country : India") + "<br>" + (" Fertility Rate : 5.903")); 

                    if (d.id==76)
                    tooltip
                    .style("left", d3.event.pageX - 50 + "px")
                    .style("top", d3.event.pageY - 70 + "px")
                    .style("display", "inline-block")
                    .html(("Country : Brazil") + "<br>" + (" Fertility Rate : 6.1")); 

                    if (d.id==826)
                    tooltip
                    .style("left", d3.event.pageX - 50 + "px")
                    .style("top", d3.event.pageY - 70 + "px")
                    .style("display", "inline-block")
                    .html(("Country : United Kingdom") + "<br>" + (" Fertility Rate : 2.18")); 


                    if (d.id==840)
                    tooltip
                    .style("left", d3.event.pageX - 50 + "px")
                    .style("top", d3.event.pageY - 70 + "px")
                    .style("display", "inline-block")
                    .html(("Country : USA") + "<br>" + (" Fertility Rate : 3.31")); 

                    if (d.id==643)
                    tooltip
                    .style("left", d3.event.pageX - 50 + "px")
                    .style("top", d3.event.pageY - 70 + "px")
                    .style("display", "inline-block")
                    .html(("Country : Russia") + "<br>" + (" Fertility Rate : 2.85")); 

                    if (d.id==710)
                    tooltip
                    .style("left", d3.event.pageX - 50 + "px")
                    .style("top", d3.event.pageY - 70 + "px")
                    .style("display", "inline-block")
                    .html(("Country : South Africa") + "<br>" + (" Fertility Rate : 6.05")); 

                      })
                      
                    .on("mouseout", function(d){ tooltip.style("display", "none");})
                
            svg1.select((".") + thiscountry)
            .style("fill", function(d){ return colorscale(thisPopulation); })
        .classed("selected_country", true)

        }
        

    })
});