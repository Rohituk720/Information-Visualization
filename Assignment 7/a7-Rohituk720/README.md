# Lab 7

Created Ex1 and Used d3 and JSON.stringify to print in the page:
1. A copy of the array (use array.slice)
2. The min key (use d3.min)
3. The max value (use d3.max)
4. Array sorted in ascending order by key (use array.sort, d3.ascending)
5. Array sorted in descending order by value (use array.sort, d3.descending)
6. Array containing the top 5 items sorted by value (use array.slice)
7. Array with a label key as shown (use array.map)

Created ex2 and updated the below:
1. Implement the code shown in the next page
2. Adapt the code to use the data you used in ex1.html
3. Update the spans background color to indicate which one is selected

Completed the code to implement an axis range transition in ex3.html

Created ex4 and completed the code to implement an axis scale type transition in ex4.html

Created ex5 by using used the starter code provided in planets_transition_1.html

Created ex6 by separating the code of ex5.html into ex6.html, ex6.css and ex6.js

PDMS links<br>
http://pdms.usc.edu/~rohitkul/a7/ex1.html<br>
http://pdms.usc.edu/~rohitkul/a7/ex2.html<br>
http://pdms.usc.edu/~rohitkul/a7/ex3.html<br>
http://pdms.usc.edu/~rohitkul/a7/ex4.html<br>
http://pdms.usc.edu/~rohitkul/a7/ex5.html<br>
http://pdms.usc.edu/~rohitkul/a7/ex6.html<br>

SCF links<br>
http://www-scf.usc.edu/~rohitkul/a7/ex1.html<br>
http://www-scf.usc.edu/~rohitkul/a7/ex2.html<br>
http://www-scf.usc.edu/~rohitkul/a7/ex3.html<br>
http://www-scf.usc.edu/~rohitkul/a7/ex4.html<br>
http://www-scf.usc.edu/~rohitkul/a7/ex5.html<br>
http://www-scf.usc.edu/~rohitkul/a7/ex6.html<br>

# INF 554 Assignment 7
### Data Visualization of 'Total Fertility (live births per woman)' dataset

### Dataset Description:

<p style="font-family:Georgia;">
                            &nbsp;&nbsp;&nbsp;&nbsp;The Population Division of the Department of Economic and Social Affairs of the United Nations Secretariat prepared the 2017 Revision of World Population Prospects representing the latest global set of demographic estimates and projections. 
                            It displays key demographic indicators for selected periods or dates from 2045 to 2050. This visualization cover the Projection of Fertility Rate per Woman in 2050.
                         </p>

<b><h5 style="font-family:Georgia;"><a href="http://data.un.org/Data.aspx?d=PopDiv&f=variableID%3a54"><b>Dataset link</b></a></h5></b>
<b><h5 style="font-family:Georgia;"><a href="https://docs.google.com/spreadsheets/d/1Xv2pQFHU7bfutvClViUta63e35mwSDakz6bU7UDaZJo/edit#gid=243334822"><b>Google spreadsheet link</b></a></h5></b>


<p style="font-family:Georgia;"> The countries considered for this analysis is as follows:</p>
<ol>
    <li style="font-family:Georgia;">Afghanistan</li>
    <li style="font-family:Georgia;">Africa</li>
    <li style="font-family:Georgia;">Algeria</li>
    <li style="font-family:Georgia;">Angola</li>
    <li style="font-family:Georgia;">Antigua & Barbuda</li>
    <li style="font-family:Georgia;">Australia</li>
    <li style="font-family:Georgia;">Brazil</li>
    <li style="font-family:Georgia;">South Africa</li>
    <li style="font-family:Georgia;">United Kingdom</li>
    <li style="font-family:Georgia;">United States of America</li>
</ol>


## Description: 
1. Sample json Data:

```html
[
	{
		"Country": "Afghanistan",
		"Fertility_Rate": 2.26
	},
	{
		"Country": "Africa",
		"Fertility_Rate": 3.071
    }
]
```


2. Loading Data from json:

```html

   d3.json("data.json").then(function(data){
    data.forEach(function(d) 
    {d["Fertility_Rate"] = +d["Fertility_Rate"];});
    });

```
3. Bar Chart

```html
    svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.Country); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d["Fertility_Rate"]); })
      .attr("height", function(d) { return height - y(d["Fertility_Rate"]); });
    
    svg.selectAll(".bar_label")
      .data(data, function(d) { return d.Country;})
      .enter().append("text")
      .text(function(d, i) {return data[i]["Fertility_Rate_2020"].toFixed(2) })
      .attr("class","bar_label")
      .attr("x", (function(d) { return x(d.Country) +30; }  ))
      .attr("y", function(d) { return y(d.Fertility_Rate_2020); })
      .attr("dy", ".85em")
      .style('font-size', '18px')
      .style('font-family', 'Georgia');

```

4. The visualization assignment includes the following:<br><br>
    a. Total Fertility Rate (live births per woman) in the year 2050 for 10 countries arranged in : <br><br>
            - Alphabetical order<br>
            - Ascending order of their Fertility rates<br>
            - Descending order of their Fertility rates<br>
    On click on the order of the Data, the graph changes<br><br>

    b. Upon selecting a radio button, the data could be filtered<br>
            - Show all Data<br>
            - Top 5<br>
            - Bottom 5<br>

<b>Published HTML link: </b><br>
http://pdms.usc.edu/~rohitkul/a7/a7.html<br>
http://www-scf.usc.edu/~rohitkul/a7/a7.html

