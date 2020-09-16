<template>
<div class="charts">
<div id="div">
</div>
<BarChart v-bind:dataset ="dataset1" v-if="dataLoaded"/>         
    <BarChart v-for="(dataset, index) in datasets" v-bind:dataset="dataset" :key="index"/>  
</div>
</template>
<script>
import BarChart from '@/components/BarChart.vue'
import * as d3 from 'd3'
export default {
name: 'charts',
data() {     
    return {       
      dataLoaded: false,
      dataset1: [],           
      datasets: []  
    };  
  },
components: {BarChart},
mounted() {
    var promises = [];         
       promises.push(d3.json("bars.json"));         
       promises.push(d3.json("bars.json"));         
       var view = this;         
       Promise.all(promises).then(function(values) {           
         view.dataset1 = values[0];           
         view.datasets = [values[0], values[1]];           
         view.dataLoaded = true;         
      });
}
}
</script>