Highcharts.SVGRenderer.prototype.symbols.cross = function (x, y, w, h) {
    return ['M', x, y, 'L', x + w, y + h, 'M', x + w, y, 'L', x, y + h, 'z'];
};
if (Highcharts.VMLRenderer) {
    Highcharts.VMLRenderer.prototype.symbols.cross = Highcharts.SVGRenderer.prototype.symbols.cross;
}

Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Aaron Goldon NBA Performance 2016-2017'
    },

    xAxis: {
        categories: ['2016-02-23', '2016-02-25', '2016-02-26', '2016-02-28', '2016-03-01', '2016-03-02',
            '2016-03-04', '2016-03-07', '2016-03-08', '2016-03-11', '2016-03-12', '2016-03-15', '2016-03-16']
    },
    yAxis: {
        title: {
            text: 'Points per Game'
        },
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: 'Points',
        marker: {
            symbol: 'square'
        },
        data: [11, 19, 17, 22, 7, 13, 4, {
            y: 20,
            marker: {
                symbol: 'url(https://jiyeonkang.files.wordpress.com/2017/08/gs.png?w=56&zoom=2)'
            }
        }, 5, 20, 17, 16, 0, 7, 6, 13, 15, 4, 9, 20, 6, 14, 14, 6, 22, 12, 17, 8, 7, 13, 9, 15, 7, 9, 12, 11, 10, 5, 5, 9, 9, 0, 11, 8, 20, 10, 9, 5, 9, 11, 7, 33, 13, 7, 12, 6, 9, 30, 2, 13, 22, 15, 18, 2, 28, 8, 21, 4, 14, 17, 8, 13, 13, 7, 12, 7, 1, 16, 7, 8, 11, 9, 10, 21, 15, 13, 20, 16, 17, 6, 17, 17, 7, 16, 16, 13, 32, 22, 12, 32 ]

    }
    , {
        // name: 'London',
        // marker: {
        //     symbol: 'diamond'
        // },
        // data: [{
        //     y: 3.9,
        //     marker: {
        //         symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
        //     }
        // }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
});
