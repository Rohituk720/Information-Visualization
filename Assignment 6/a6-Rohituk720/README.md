# INF 554 Assignment 6
<p>

<u>Installed d3 using node</u>
<u>Ex1 - Set up browser sync and loaded D3 and added to the repository</u>
       - Added margins and a rectangle
       - Added data from USC Schedule
       - Added timeline

</p>

<u>Ex2 - Copied Ex1 as Ex2 and set up browser sync</u>
       - Added bar chart as per the slide

<u>Ex3 - Copied Ex2 as Ex3 and set up browser sync</u>
       - Added scatter plot for 3 planets for now
       - Added all planets' data and created scatterplot

<p>
    &nbsp;&nbsp;&nbsp;&nbsp; World Bank staff estimates based on the United Nations Population Division's World Urbanization Prospects. The Rural population percentage of 10 countries as of the year 2017 and 2018 is visualized using four different visualization techniques.
 </p>
<p><a href="https://data.worldbank.org/indicator/SP.RUR.TOTL.ZS">Dataset link</a></p>

<p> The countries considered for this analysis is as follows:</p>
<ol>
<li>Austria</li>
<li>Brazil</li>
<li>China</li>
<li>Spain</li>
<li>Fiji</li>
<li>India</li>
<li>Peru</li>
<li>Sudan</li>
<li>Serbia</li>
<li>Iraq</li>
</ol>

<u> 1. Slopegraph : View of Rural Population (% of total population) in 2017 and 2018 for each of the 10 countries</u>
<img src="Slopegraph.svg" width="800" height="800">

<u> 2. Bar Chart: View of Rural Population (% of total population) in 2017 for each of the 10 countries</u>

        - Create a bar chart with x-axis as countries and y-axis as Percentage of Rural Population.
        

```html
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
```
 <u> 3. Bar Chart: View of Rural Population (% of total population) in 2018 for each of the 10 countries</u>

        - Create a bar chart with x-axis as countries and y-axis as Percentage of Rural Population.
        

```html
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

```

<u>4. Lollipop Chart: View of Rural Population (% of total population) in 2017 for each of the 10 countries</u>


```html
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
```
<u>5. Lollipop Chart: View of Rural Population (% of total population) in 2017 for each of the 10 countries</u>


```html
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
```

<u>6. Bubble Chart: View of Rural Population (% of total population) in 2018 for each of the 20 countries</u>

```html
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
```
  
<u>7. Bubble Chart: View of Rural Population (% of total population) in 2018 for each of the 20 countries</u>

```html
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
```
<a href="http://www-scf.usc.edu/~rohitkul/a6.html">Link to SCF page</a>