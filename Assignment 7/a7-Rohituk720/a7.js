function setMode(id) {
    d3.select("#descending").style('background-color', 'yellow');
    d3.select("#ascending").style('background-color', "yellow");
    d3.select("#alphabetical").style('background-color', "yellow");
    d3.select(id).style('background-color', 'orange');}

function setMode2(id) {
    d3.select("#top5").style('background-color', 'yellow');
    d3.select("#bottom5").style('background-color', "yellow");
    d3.select("#All").style('background-color', "yellow");
    d3.select(id).style('background-color', 'orange');}
 
 function alphabetical_sort(data2){
     var s = x.domain(data2.sort(function (a, b) { return d3.ascending(a.Country, b.Country); })
     .map(function (d) { return d.Country; })); 
     return s;}

 function ascending_sort(data2){
     var s= x.domain(data2.sort(function (a, b) { return d3.ascending(a["Fertility_Rate"], b["Fertility_Rate"]); })
     .map(function (d) { return d.Country; }));
      return s;}
 function descending_sort(data2){
     var s = x.domain(data2.sort(function (a, b) { return d3.descending(a["Fertility_Rate"], b["Fertility_Rate"]); })
     .map(function (d) { return d.Country; })); 
      return s;}

       
 function transition() {
     var transition = svg.transition().duration(1000);
     var delay = function (d, i) { return i * 60;};
     xAxis = xAxis.scale(x);
     transition.selectAll(".bar").delay(delay).attr("x", function (d) {return x(d.Country);})
     transition.select(".x.axis").call(xAxis).selectAll("g").delay(delay);
     transition.selectAll(".bar_label").delay(delay).attr("x", function (d) {return x(d.Country) +30;});}
   
  function bar_transition(data2,x){
     var transition = svg.transition().duration(1000);
     var delay = function (d, i) {return i * 60;};
     var labels = svg.selectAll(".bar_label").data(data2)
     var bars = svg.selectAll(".bar").data(data2)
     xAxis = xAxis.scale(x);
     bars.exit().transition(transition).remove();   
     labels.exit().transition(transition).remove();
     bars.enter().append("rect")
         .transition(transition)
         .attr("class", "bar")
         .attr("x", function(d) { return x(d.Country); })
         .attr("width", x.bandwidth())
         .attr("y", function(d) { return y(d["Fertility_Rate"]); })
         .attr("height", function(d) { return height - y(d["Fertility_Rate"]); });
     bars.enter().append("rect")
         .attr("class", "bar")
         .attr("x", function(d) { return x(d.Country); })
         .attr("width", x.bandwidth())
         .attr("y", function(d) { return y(d["Fertility_Rate"]); })
         .attr("height", function(d) { return height - y(d["Fertility_Rate"]); });   
     bars.transition(transition)
         .attr("class", "bar")
         .attr("x", function(d) { return x(d.Country); })
         .attr("width", x.bandwidth())
         .attr("y", function(d) { return y(d["Fertility_Rate"]); })
         .attr("height", function(d) { return height - y(d["Fertility_Rate"]); }); 
     labels.enter().append("text")
         .text(function(d, i) {return data2[i]["Fertility_Rate"] })
         .attr("class","bar_label")
         .attr("x", (function(d) { return x(d.Country) +30; }  ))
         .attr("y", function(d) { return y(d["Fertility_Rate"]); })
         .attr("dy", ".85em")
         .style('font-size', '20px')
         .style('font-family', 'Georgia');
     labels.transition(transition)
         .text(function(d, i) {return data2[i]["Fertility_Rate"] })
         .attr("class","bar_label")
         .attr("x", (function(d) { return x(d.Country) +30; }  ))
         .attr("y", function(d) { return y(d["Fertility_Rate"]); })
         .attr("dy", ".85em")
         .style('font-size', '20px')
         .style('font-family', 'Georgia')
     transition.selectAll(".bar")
         .delay(delay)
         .attr("x", function (d) {
         return x(d.Country);});
     transition.select(".x.axis")
         .call(xAxis)
         .selectAll("g")
         .delay(delay);
     transition.selectAll(".bar_label")
          .delay(delay)
          .attr("x", function (d) {
          return x(d.Country) +30;});
 }

var margin = {top: 100, right: 20, bottom: 100, left: 60},
width = 960 - margin.left - margin.right,
height = 800 - margin.top - margin.bottom;
   
var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
y = d3.scaleLinear().rangeRound([height, 0]);
    
var xAxis = d3.axisBottom().scale(x);
var yAxis = d3.axisLeft().scale(y);
 
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var span_id = 0;
    
d3.json("data.json").then(function(data){
    data.forEach(function(d) {
    d["Fertility_Rate"] = +d["Fertility_Rate"];
    });
    
var data2 = data;
x.domain(data.map(function(d) { return d.Country; }));
y.domain([0, 4]);
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
    
    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em");
    
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
      .text(function(d, i) {return data[i]["Fertility_Rate"] })
      .attr("class","bar_label")
      .attr("x", (function(d) { return x(d.Country) +30; }  ))
      .attr("y", function(d) { return y(d.Fertility_Rate); })
      .attr("dy", ".85em")
      .style('font-size', '18px')
      .style('font-family', 'Georgia');
      
      svg.append("text")
                .attr("x", -(height / 2)-140)
                .attr("y", - margin.left * 0.61)
                .attr("transform", "rotate(-90)")
                .attr('class', 'label')
                .text("Total Fertility Rate (live births per woman)")
                .style("font-size", "1em");

      svg.append("text")
                .attr("x", (width/2)-50)
                .attr("y", 640)
                .attr('class', 'label')
                .text("Countries")
                .style("font-size", "1em");
    
     svg.append("text")
                .attr("x", (width/2)-250)
                .attr("y", -30)
                .attr('class', 'label')
                .text("Total Fertility rate for 10 countries")
                .style("font-size", "2em");
    
d3.select("#alphabetical").style("background-color","yellow");
    d3.select("#alphabetical").on("click", function () {
        setMode("#alphabetical");
        span_id =0;
        s = alphabetical_sort(data2);
        transition(s);});
    
        
d3.select("#ascending");
    d3.select("#ascending").on("click", function () {
        setMode("#ascending");
        span_id =1;
        s = ascending_sort(data2);
        transition(s);});
    
 d3.select("#descending");
    d3.select("#descending").on("click", function () {
        setMode("#descending");
        span_id =2;
        s = descending_sort(data2);
        transition(s);});




d3.selectAll("input[name='select']").on("click",function(){
var valRadio = this.value;
if(valRadio == "top5"){
    setMode2("#top5");
    data2 = data;
    var data1 = data2.sort(function (a, b) { return d3.descending(a["Fertility_Rate"], b["Fertility_Rate"]); }).slice(0,5);
    if(span_id==0){
        var d1 = data1.sort(function (a, b) { return d3.ascending(a["Country"], b["Country"]); });}
    if(span_id==1){
       var d1 = data1.sort(function (a, b) { return d3.ascending(a["Fertility_Rate"], b["Fertility_Rate"]); });}
    if(span_id==2){
       var d1 = data1.sort(function (a, b) { return d3.descending(a["Fertility_Rate"], b["Fertility_Rate"]); });}
    data2 = d1;
    var s = x.domain(data2.map(function (d) { return d.Country; }));
    bar_transition(data2,s);
    }
    else if (valRadio == "All"){
        setMode2("#All");
        data2 = data;
        if(span_id==0){
            var d1 = data.sort(function (a, b) { return d3.ascending(a["Country"], b["Country"]); });}
        if(span_id==1){
           var d1 = data.sort(function (a, b) { return d3.ascending(a["Fertility_Rate"], b["Fertility_Rate"]); });}
        if(span_id==2){
           var d1 = data.sort(function (a, b) { return d3.descending(a["Fertility_Rate"], b["Fertility_Rate"]); });}
       data2 = d1;
       var s = x.domain(data2.map(function (d) { return d.Country; }))
       bar_transition(data,s);
       }
else if (valRadio=="reset"){
    setMode("#alphabetical");
    data2 = data;
    if(span_id==0){
        var d1 = data.sort(function (a, b) { return d3.ascending(a["Country"], b["Country"]); });}
    if(span_id==1){
        var d1 = data.sort(function (a, b) { return d3.ascending(a["Country"], b["Country"]); });}
    if(span_id==2){
        var d1 = data.sort(function (a, b) { return d3.ascending(a["Country"], b["Country"]); });}
   data2 = d1;
   var s = x.domain(data2.map(function (d) { return d.Country; }))
   bar_transition(data,s);

}
    else {
    setMode2("#bottom5");
    data2 = data;
    var data1 = data2.sort(function (a, b) { return d3.ascending(a["Fertility_Rate"], b["Fertility_Rate"]);}).slice(0,5);
    if(span_id==0){
        var d1 = data1.sort(function (a, b) { return d3.ascending(a["Country"], b["Country"]); });}
   if(span_id==1){
       var d1 = data1.sort(function (a, b) { return d3.ascending(a["Fertility_Rate"], b["Fertility_Rate"]); });}
   if(span_id==2){
       var d1 = data1.sort(function (a, b) { return d3.descending(a["Fertility_Rate"], b["Fertility_Rate"]); });}
    data2 = d1;
    var s = x.domain(data2.map(function (d) { return d.Country; }))
    bar_transition(data2,s);}

})});