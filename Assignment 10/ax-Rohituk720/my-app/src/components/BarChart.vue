<template>
  <div class="bar">
    <svg ref="mysvg" style="display: inline-block; vertical-align: top; background-color: mistyrose" />
  </div>
</template>
<script>
import * as d3 from 'd3'
export default {
  name: 'BarChart',
  props: {
    dataset: {
      type: Array
    }
  },
  mounted() {
    //console.log(this.dataset)
  if (!this.dataset || !this.dataset.length) {
    svg = d3.select(this.$refs["mysvg"])
      .append('svg')
      .append('text')
      .text('<BarChart v-bind:dataset="data"/>')
      .attr('x', 20)
      .attr('y', 75);
    return;
  }
  var margin = { top: 10, right: 20, bottom: 20, left: 40 };
  var width = 400 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;
  var x = d3.scaleBand()
      .domain(this.dataset.map((d) => {
          return d.key
      }))
      .range([0, width])
      .paddingInner(0.05);
  var max = d3.max(this.dataset, function(d) { return d.value });
  var y = d3.scaleLinear()
      .domain([0, max])
      .range([height, 0]);
  var xAxis = d3.axisBottom()
      .scale(x);
  var yAxis = d3.axisLeft()
      .scale(y)
      .ticks(3);
  var svg = d3.select(this.$refs["mysvg"])
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  svg.selectAll('rect')
        .data(this.dataset)
      .enter()
      .append('rect')
      .attr('x', function(d) {
          return x(d.key);
      })
      .attr('y', function(d) {
          return y(d.value);
      })
      .attr('width', x.bandwidth)
      .attr('height', function(d) {
          return height - y(d.value);
      })
      .style('fill', 'skyblue');
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
  svg.append("g")
      .call(yAxis);   
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
