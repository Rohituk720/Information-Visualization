var xScale = d3.scaleTime();
var yScale = d3.scaleLinear();

var xAxis = d3.axisBottom()
    .scale(xScale);

var yAxis = d3.axisLeft()
    .scale(yScale);

var line = d3.line() //d3-shape line generator
    .x(function (d) { return xScale(d.date); })
    .y(function (d) { return yScale(d.close); });

d3.csv('amzn.csv', function (d) {
    var format = d3.timeParse('%Y-%m-%d');
    return {
        date: format(d.date),
        close: +d.close
    };
}).then(function (data) {
    //margins convention
    var margin = { top: 20, left: 40, bottom: 40, right: 40 };
    var width = parseInt(d3.select('#graph').style('width')) - margin.left - margin.right;
    var height = parseInt(d3.select('#graph').style('height')) - margin.top - margin.bottom;

    var svg = d3.select('#graph')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .style('background-color', '#ffeeee')
        .append('g')
        .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

    xScale.range([0, width]).nice(d3.timeYear);
    yScale.range([height, 0]).nice();

    xScale.domain(d3.extent(data, function (d) { return d.date; }));
    yScale.domain(d3.extent(data, function (d) { return d.close; }));

    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis);

    svg.append('g')
        .attr('class', 'y axis')
        .call(yAxis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.7em')
        .style('text-anchor', 'end')
        .text('Price ($)');

    var dataPerPixel = data.length / width;
    var sample = data.filter(  //returns data for which the specified filter is true.
        function (d, i) {
            return i % Math.ceil(dataPerPixel) == 0;
        });

    svg.append('path')
        .datum(sample)
        .attr('class', 'curve')
        .attr('d', line);

    var firstRecord = data[data.length - 1],
        lastRecord = data[0];

    var first = svg.append('g')
        .attr('class', 'first')
        .style('display', 'none');  //hide

    first.append('text')
        .attr('x', -8)
        .attr('y', 4)
        .attr('text-anchor', 'end')
        .text('$' + firstRecord.close);
    first.append('circle')
        .attr('r', 4);

    var last = svg.append('g')
        .attr('class', 'last')
        .style('display', 'none');  //hide

    last.append('text')
        .attr('x', 8)
        .attr('y', 4)
        .text('$' + lastRecord.close);

    last.append('circle')
        .attr('r', 4);

    //text to describe the graph
    svg.append('text')
        .attr('id', 'desc')
        .attr('x', 25)
        .attr('y', 10)
        .text(sample.length + ' points');

    resize();  //redraw in case we start small!

    function resize() {
        var width = parseInt(d3.select('#graph').style('width')) - margin.left - margin.right;
        var height = parseInt(d3.select('#graph').style('height')) - margin.top - margin.bottom;

        xScale.range([0, width]).nice(d3.timeYear);
        yScale.range([height, 0]).nice();

        var type = '';
        if (width < 550 || height < 200) { //sparkline
            type = 'sparkline';

            svg.select('.x.axis').style('display', 'none');  //hide
            svg.select('.y.axis').style('display', 'none');  //hide

            svg.select('.first')
                .attr('transform', 'translate(' + xScale(firstRecord.date) + ',' + yScale(firstRecord.close) + ')')
                .style('display', 'initial');

            svg.select('.last')
                .attr('transform', 'translate(' + xScale(lastRecord.date) + ',' + yScale(lastRecord.close) + ')')
                .style('display', 'initial');
        } else { //linechart
            type = 'line chart';

            svg.select('.x.axis').style('display', 'initial');  //show
            svg.select('.y.axis').style('display', 'initial');  //show
            svg.select('.last').style('display', 'none');  //hide
            svg.select('.first').style('display', 'none');  //hide
        }

        yAxis.ticks(Math.max(height / 50, 2));  //every 50px
        xAxis.ticks(Math.max(width / 100, 2));  //every 100px

        svg.attr('width', width)
            .attr('height', height)

        svg.select('.x.axis')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);

        svg.select('.y.axis')
            .call(yAxis);

        dataPerPixel = data.length / width;
        sample = data.filter(
            function (d, i) {
                return i % Math.ceil(dataPerPixel) == 0;
            });

        svg.selectAll('.curve')
            .datum(sample) //replace with sampled data
            .attr('d', line);

        svg.select('#desc')
            .text(width + 'x' + height + ' ' + type + ' with ' + sample.length + ' points');

        d3.select(window).on('resize', resize);
    }
});