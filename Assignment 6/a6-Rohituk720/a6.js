d3.json("Data.json", function(d) {
    return [d.Country_Name,d.Year_2017,d.Year_2018];
    }).then(function(data) {
    console.log("Data loaded from CSV")
    console.log(data);
    bar_chart1(data)
    bar_chart2(data)
    console.log("Called Bar chart method for bar plot")
    lollipop_chart1(data)
    lollipop_chart2(data)
    console.log("Called Lollipop plot method")
    bubble_chart1(data)
    bubble_chart2(data)
    console.log("Called Bubble plot method")
    });

var property = function(svg, data){

    margin = {top: 20, right: 10, bottom: 94, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

    var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

    var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    x.domain(data.map(function(d) { return d.Country_Name; }));
    y.domain([0, 100]);
    
    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor","end")
        .attr("transform", "rotate(-45)")
        
    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10))
            .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
    return [g,x,y];
}

var bar_chart1 = function(data)
{
    var svg = d3.select("svg.bar-chart1");
    var pr = property(svg, data);
    var g = pr[0];
    var x = pr[1];
    var y = pr[2];

    g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .style("text-align", "center")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.Country_Name); })
    .attr("y", function(d) { return y(d.Year_2017); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.Year_2017); })
    .text(function (d) { return y(d.Year_2017); });

    svg.append("text") //create and place labels
    .attr("x", 350)
    .attr("y", 480)
    .classed('label', true)
    .text("Country Name");

    svg.append("text")
    .attr("x", -350)
    .attr("y", 15)
    .classed('label', true)
    .attr("transform","rotate(-90)")
    .text("Rural Population (% of total population)");

};

var bar_chart2 = function(data)
{
    var svg = d3.select("svg.bar-chart2");
    var pr = property(svg, data);
    var g = pr[0];
    var x = pr[1];
    var y = pr[2];

    g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .style("text-align", "center")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.Country_Name); })
    .attr("y", function(d) { return y(d.Year_2018); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.Year_2018); })
    .text(function (d) { return y(d.Year_2018); });

    svg.append("text") //create and place labels
    .attr("x", 350)
    .attr("y", 480)
    .classed('label', true)
    .text("Country Name");

    svg.append("text")
    .attr("x", -350)
    .attr("y", 15)
    .classed('label', true)
    .attr("transform","rotate(-90)")
    .text("Rural Population (% of total population)");

};

var bubble_chart1 = function(data){
    var svg = d3.select("svg.bubble-chart1");
    var pr = property(svg, data);
    var g = pr[0];
    var x = pr[1];
    var y = pr[2];

    g.selectAll(".scatter")
    .data(data)
    .enter().append("circle")
    .attr("class", "scatter")
    .attr("cx", function(d) { return x(d.Country_Name)+35; })
    .attr("cy", function(d) { return y(d.Year_2017); })
    .attr("r", function(d){return d.Year_2017})

    svg.append("text") //create and place labels
    .attr("x", 350)
    .attr("y", 480)
    .classed('label', true)
    .text("Country Name");

    svg.append("text")
    .attr("x", -350)
    .attr("y", 15)
    .classed('label', true)
    .attr("transform","rotate(-90)")
    .text("Rural Population (% of total population)");
}       
 
var bubble_chart2 = function(data){
    var svg = d3.select("svg.bubble-chart2");
    var pr = property(svg, data);
    var g = pr[0];
    var x = pr[1];
    var y = pr[2];

    g.selectAll(".scatter")
    .data(data)
    .enter().append("circle")
    .attr("class", "scatter")
    .attr("cx", function(d) { return x(d.Country_Name)+35; })
    .attr("cy", function(d) { return y(d.Year_2018); })
    .attr("r", function(d){return d.Year_2018})

    svg.append("text") //create and place labels
    .attr("x", 350)
    .attr("y", 480)
    .classed('label', true)
    .text("Country Name");

    svg.append("text")
    .attr("x", -350)
    .attr("y", 15)
    .classed('label', true)
    .attr("transform","rotate(-90)")
    .text("Rural Population (% of total population)");
} 

var lollipop_chart1 = function(data)
{
    var svg = d3.select("svg.lollipop-chart1");
    var pr = property(svg, data);
    var g = pr[0];
    var x = pr[1];
    var y = pr[2];
    g.selectAll("svg")
    .data(data)
    .enter()
    .append("line")
    .attr("x1", function(d) { return x(d.Country_Name)+33; })
    .attr("y1", function(d) { return y(d.Year_2017); })
    .attr("x2", function(d) { return x(d.Country_Name)+33; })
    .attr("y2", 386)
    .attr("stroke","#483737ff")
    .attr("stroke-width","6px")

    g.selectAll(".scatter")
    .data(data)
    .enter().append("circle")
    .attr("class", "scatter")
    .attr("cx", function(d) { return x(d.Country_Name)+33; })
    .attr("cy", function(d) { return y(d.Year_2017); })
    .attr("r", 9)

    svg.append("text") //create and place labels
    .attr("x", 350)
    .attr("y", 480)
    .classed('label', true)
    .text("Country Name");

    svg.append("text")
    .attr("x", -350)
    .attr("y", 15)
    .classed('label', true)
    .attr("transform","rotate(-90)")
    .text("Rural Population (% of total population)");
}

var lollipop_chart2 = function(data)
{
    var svg = d3.select("svg.lollipop-chart2");
    var pr = property(svg, data);
    var g = pr[0];
    var x = pr[1];
    var y = pr[2];
    g.selectAll("svg")
    .data(data)
    .enter()
    .append("line")
    .attr("x1", function(d) { return x(d.Country_Name)+33; })
    .attr("y1", function(d) { return y(d.Year_2018); })
    .attr("x2", function(d) { return x(d.Country_Name)+33; })
    .attr("y2", 386)
    .attr("stroke","#483737ff")
    .attr("stroke-width","6px")

    g.selectAll(".scatter")
    .data(data)
    .enter().append("circle")
    .attr("class", "scatter")
    .attr("cx", function(d) { return x(d.Country_Name)+33; })
    .attr("cy", function(d) { return y(d.Year_2018); })
    .attr("r", 9)

    svg.append("text") //create and place labels
    .attr("x", 350)
    .attr("y", 480)
    .classed('label', true)
    .text("Country Name");

    svg.append("text")
    .attr("x", -350)
    .attr("y", 15)
    .classed('label', true)
    .attr("transform","rotate(-90)")
    .text("Rural Population (% of total population)");
}