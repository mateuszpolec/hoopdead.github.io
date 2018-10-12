window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Data"
        },
        axisX:{
            valueFormatString: "DD MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "Ilość wizyt",
            includeZero: false,
            valueFormatString: "##Wizyty",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function(e) {
                    return "" + CanvasJS.formatNumber(e.value, "##Wizyty" + " ");
                }
            }
        },
        data: [{
            type: "area",
            xValueFormatString: "DD MMM",
            yValueFormatString: "##Wizyty",
            dataPoints: [
   
            {x: new Date(2018, 09, 01), y:1},
            {x: new Date(2018, 09, 02), y:3},
            {x: new Date(2018, 09, 03), y:1},
            {x: new Date(2018, 09, 04), y:2},
            {x: new Date(2018, 09, 05), y:1},
            {x: new Date(2018, 09, 06), y:2},
            {x: new Date(2018, 09, 07), y:1},
            {x: new Date(2018, 09, 08), y:1},
            {x: new Date(2018, 09, 09), y:3},
            {x: new Date(2018, 09, 10), y:1},
            {x: new Date(2018, 09, 11), y:2},
            {x: new Date(2018, 09, 12), y:1},
            {x: new Date(2018, 09, 13), y:1},
            {x: new Date(2018, 09, 14), y:3},
            {x: new Date(2018, 09, 15), y:1},
            {x: new Date(2018, 09, 16), y:1},
            {x: new Date(2018, 09, 17), y:2},
            {x: new Date(2018, 09, 18), y:1},
            {x: new Date(2018, 09, 19), y:1},
            {x: new Date(2018, 09, 20), y:1},
            {x: new Date(2018, 09, 21), y:2},
            {x: new Date(2018, 09, 22), y:1},
            {x: new Date(2018, 09, 23), y:1},
            {x: new Date(2018, 09, 24), y:1},
            {x: new Date(2018, 09, 25), y:3},
            {x: new Date(2018, 09, 26), y:3},
            {x: new Date(2018, 09, 27), y:1},
            {x: new Date(2018, 09, 28), y:2},
            {x: new Date(2018, 09, 29), y:2},
            {x: new Date(2018, 09, 30), y:1},
            {x: new Date(2018, 09, 31), y:1},
            
            ]
        }]
    });
    chart.render();
    
    }