d3.csv("data.csv", function(d) {
    return [d['Country Name'],d['Population']];
    }).then(function(data) {
    var columns = ['Country Name', 'Population']
    console.log("Data loaded from CSV")
    console.log(data);
    tabulate(data,columns)
    console.log("Called Tabulate method for loading table")
    bar_chart(data)
    console.log("Called Bar chart method for bar plot")
    lollipop_chart(data)
    console.log("Called Lollipop plot method")
    bubble_chart(data)
    console.log("Called Bubble plot method")
    });

var tabulate = function (data,columns) 
{
    var table = d3.select('#table1');
    table.append("thead").append('tr')
    .selectAll('th')
    .data(columns)
    .enter()
    .append('th')
    .text(function(d){ return d})
    table.append("tbody").selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .selectAll('td')
    .data(function(d) { return d; })
    .enter()
    .append('td')
    .text(function(d) { return d; });
    return table;
              
}
var property = function(svg, data){

    margin = {top: 20, right: 10, bottom: 94, left: 30},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

    var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

    var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    x.domain(data.map(function(d) { return d[0]; }));
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

var bar_chart = function(data)
{
    var svg = d3.select("svg.bar-chart");
    var pr = property(svg, data);
    var g = pr[0];
    var x = pr[1];
    var y = pr[2];

    g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .style("text-align", "center")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d[0]); })
    .attr("y", function(d) { return y(d[1]); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d[1]); })
    .text(function (d) { return y(d[1]); });

};

var bubble_chart = function(data){
    var svg = d3.select("svg.bubble-chart");
    var hierarchy_data = {
        "children": data
    }
    
    var margin = 20;

    var width = svg.attr("width") -  margin;
    var height = svg.attr("height") - margin;

    var pack = d3.pack(hierarchy_data)
        .size([width, height])
        .padding(1.5);
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var nodes = d3.hierarchy(hierarchy_data)
        .sum(function (d) {
            return d[1];
        }).sort(function(a,b) {
       
            return b.data[1] - a.data[1];
        })

    var node = svg.selectAll(".node")
        .data(pack(nodes).descendants())
        .enter()
        .filter(function (d) {
            return !d.children;
        })
        .append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
                
                return  "translate(" + d.x+ "," + d.y+ ")";
        })

    
    node.append("circle")
        .attr("r", function (d) {
            return d.r*1;
        }).style("fill", function (d, i) {
            return color(i);
        });
    

    node.append("text")
        .text(function(d) {
            return d.data[0]
        })
        .attr("text-anchor", "middle")
        .attr('fill','white')
                
}  

var lollipop_chart = function(data)
{
    var svg = d3.select("svg.lollipop-chart");
    var pr = property(svg, data);
    var g = pr[0];
    var x = pr[1];
    var y = pr[2];
    g.selectAll("svg")
    .data(data)
    .enter()
    .append("line")
    .attr("x1", function(d) { return x(d[0])+16; })
    .attr("y1", function(d) { return y(d[1]); })
    .attr("x2", function(d) { return x(d[0])+16; })
    .attr("y2", 386)
    .attr("stroke","#483737ff")
    .attr("stroke-width","6px")

    g.selectAll(".scatter")
    .data(data)
    .enter().append("circle")
    .attr("class", "scatter")
    .attr("cx", function(d) { return x(d[0])+16; })
    .attr("cy", function(d) { return y(d[1]); })
    .attr("r", 9)
}