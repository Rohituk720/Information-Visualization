<template>
  <div class="about">
    <svg id="svg01" style="display: inline-block; vertical-align: top; background-color: mistyrose;"></svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
name: 'about',
mounted() {
d3.json('bars.json')
        .then(function(data) {        
          var margin = {top: 30, right: 30, bottom: 30, left: 30};  //step1: set margin 
          var width = 400 - margin.left - margin.right,  //step2: set width and height     
          height = 220 - margin.top - margin.bottom; 

          var svg = d3.select("#svg01")    
              .attr("width", width + margin.left + margin.right)   
              .attr("height", height + margin.top + margin.bottom)   
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
          
          var x = d3.scaleBand()   
              .domain(['A', 'B', 'C'])   
              .range([0, (width-margin.right)]); 
          
          var xAxis = d3.axisBottom()  
              .scale(x);

          svg.append("g") 
              .attr("class", "x axis")  
              .attr("transform", "translate(" + margin.left + ", " + height + ")")   
              .call(xAxis); 
          
          var y = d3.scaleLinear()   
              .domain([150, 0])   
              .range([10, height]);
          
          var yAxis = d3.axisLeft()
              .scale(y)
              .ticks(4);
          
          svg.append("g") 
              .attr("class", "y axis")  
              .attr("transform", "translate(" + margin.left + ", 0)")   
              .call(yAxis); 

          svg.selectAll('rect')   
              .data(data)   
              .enter()   
              .append('rect')   
              .attr('x', function (d) { return x(d.key)+margin.left+1; })   
              .attr('y', function (d) { return height - d.value; })   
              .attr('width', width / data.length - 20)   
              .attr('height', function (d) { return d.value; })   
              .style('fill', 'skyblue');    
        });
}
}
</script>
