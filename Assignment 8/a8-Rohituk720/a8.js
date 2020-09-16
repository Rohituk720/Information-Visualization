var bubble_chart = function(){
    d3.json("bubblechart.json")   
    .then(function (data) {   
        
    var color = d3.scaleLinear()
                .domain([0, 5])
                .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
                .interpolate(d3.interpolateHcl)

    var format = d3.format(",d")

    var width = 912,
    height = 912;

    var pack = data => d3.pack()
                        .size([width, height])
                        .padding(3)
                        (d3.hierarchy(data)
                        .sum(d => d.FertilityRate)
                        .sort((a, b) => b.FertilityRate - a.FertilityRate))

    const root = pack(data);
    let focus = root;
    let view;

    const svg = d3.select('#chart1') 
        .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
        .style("display", "block")
        //.style("margin", "0 -14px")
        .style("background", color(0))
        .style("cursor", "pointer")
        .on("click", () => zoom(root));

    const node = svg.append("g")
        .selectAll("circle")
        .data(root.descendants().slice(1))
        .join("circle")
        .attr("fill", d => d.children ? color(d.depth) : "white")
        .attr("pointer-events", d => !d.children ? "none" : null)
        .on("mouseover", function() { d3.select(this).attr("stroke", "#000"); })
        .on("mouseout", function() { d3.select(this).attr("stroke", null); })
        .on("click", d => focus !== d && (zoom(d), d3.event.stopPropagation()));

    const label = svg.append("g")
        .style("font", "10px sans-serif")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .selectAll("text")
        .data(root.descendants())
        .join("text")
        .style("fill-opacity", d => d.parent === root ? 1 : 0)
        .style("display", d => d.parent === root ? "inline" : "none")
        .text(d => d.data.name)
        .attr("font-size","30px");

    zoomTo([root.x, root.y, root.r * 2]);

    function zoomTo(v) {
        const k = width / v[2];

        view = v;

        label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
        node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
        node.attr("r", d => d.r * k);
    }

    function zoom(d) {
        const focus0 = focus;

        focus = d;

        const transition = svg.transition()
            .duration(d3.event.altKey ? 7500 : 750)
            .tween("zoom", d => {
            const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
            return t => zoomTo(i(t));
            });

        label
        .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
        .transition(transition)
            .style("fill-opacity", d => d.parent === focus ? 1 : 0)
            .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
            .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
    }   
                        
    }); 
}


var line_chart = function(){
    var names=["Afghanistan","Africa","Algeria","Angola","Antigua and Barbuda","Australia","Brazil","South Africa","United Kingdom","United States of America"];
    d3.csv("linechart.csv", function(d) {
        d.Years = d.Years;
        d.value=new Array();
        var i=0;
        d.value[i++] = +d.Afghanistan;
        d.value[i++] = +d.Africa;
        d.value[i++] = +d.Algeria;
        d.value[i++] = +d.Angola;
        d.value[i++] = +d.AntiguaandBarbuda;
        d.value[i++] = +d.Australia;
        d.value[i++] = +d.Brazil;
        d.value[i++] = +d.SouthAfrica;
        d.value[i++] = +d.UnitedKingdom;
        d.value[i++] = +d.UnitedStates;
        return d;
    }).then(function(data) {
        var svg = d3.select("#chart2"),
            margin = {
                top: 40,
                right: 20,
                bottom: 70,
                left: 50
            },
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scaleLinear()
            .rangeRound([0, width]);

        var y = d3.scaleLinear()
            .rangeRound([height, 0]);

         
        var color = ["#1f77b4","#ff7f0e","#20002c","#a6e708","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"];

        x.domain(d3.extent(data, function(d) {
            return d.Years;
        }));
        y.domain([1, 8]);

        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        g.append("g")
            .call(d3.axisLeft(y))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("x",-300)
            .attr("y", -50)
            .attr("dy", "1em")
            .attr("text-anchor", "end")
            .text("Total Fertility Rates")
            .attr("font-size","20px");

            g.append("g")
            .call(d3.axisLeft(y))
            .append("text")
            .attr("fill", "#000")
            .attr("x", 500)
            .attr("y", 750)
            .attr("dy", "1em")
            .attr("text-anchor", "end")
            .text("Year")
            .attr("font-size","20px");

        for(var i=0; i<10; i++){
            var line = d3.line()
            .x(function(d) {
                return x(d.Years);
            })
            .y(function(d) {
                return y(d.value[i]);
            });
            g.append("circle")
            .attr("cx",650)
            .attr("cy",30+25*i)
            .attr("r", 6)
            .style("fill", color[i]);

            g.append("text").
            attr("x", 660).
            attr("y", 33+25*i)
            .text(names[i])
            .style("font-size", "14px")
            .attr("alignment-baseline","middle");

            g.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", line)
            .attr("stroke", color[i]);

        }       
    });
}

var pie_chart = function(){
    d3.csv("piechart.csv", function(d) {
        d.Value = +d.FertilityRate;
        return d;
    }).then(function(data) {
        var svg = d3.select("#chart3"),
            width = +svg.attr("width"),
            height = +svg.attr("height"),
            radius = Math.min(width, height) / 2,
            g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var color = d3.scaleOrdinal(['#762a83','#af8dc3','#e7d4e8','#7fbf7b','#d9f0d3']);

        var pie = d3.pie()
            .sort(null)
            .value(function(d) {
                return d.FertilityRate;
            });

        var path = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);
        
        var label = d3.arc()
            .outerRadius(radius - 60)
            .innerRadius(radius - 60);

        var div = d3.select("body").append("div")
            .attr("class", "tooltip-donut")
            .style("opacity", 0);

        var arc = g.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");

        var draw = arc.selectAll('path')
            .data(pie(data))
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill', function (d) {
                 return color(d.data.Countries);
            })
            .attr("transform", "translate(0, 0)")
            //.attr("dy", "0.45em")
            .on('mouseover', function (d, i) {
                 d3.select(this).transition()
                      .duration('50')
                      .attr('opacity', '.85');
                 div.transition()
                      .duration(50)
                      .style("opacity", 1);

                 div.html(d.data.Countries + " " + d.data.FertilityRate)
                      .style("left", (d3.event.pageX + 10) + "px")
                      .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                 d3.select(this).transition()
                      .duration('50')
                      .attr('opacity', '1');
                 div.transition()
                      .duration('50')
                      .style("opacity", 0);
                
            });

           
            
    });
}

bubble_chart();
line_chart();
pie_chart();