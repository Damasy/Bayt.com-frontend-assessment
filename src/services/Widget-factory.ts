import { widgets } from "../init";
import { Widget } from "../models";
import { types } from "../models/enums";
import { fetchData } from "./Data-fetch";

const handleTitle = (type: types) => {
  const typeEnum = types;
  let title: string = typeEnum[type];
  title = title.split('-').join(' ');
  return title;
};

export const handleChartOptions = (widget: Widget) => {

  switch(widget.type) {
    case 1:
      return {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: widget.title
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true
            }
          }
        },
        series: widget.datasource
      };
    case 2:
      return {
        chart: {
          type: 'pie'
        },
        title: {
          text: widget.title
        },
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            'Area (square km): <b>{point.y}</b><br/>' +
            'Population density (people per square km): <b>{point.z}</b><br/>'
        },
        series: widget.datasource
      };
    case 3:
      return {

        title: {
          text: widget.title
        },
      
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
      
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 2010
          }
        },
      
        series: widget.datasource,
      
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      
      }
    case 4:
      return {
        title: {
          text: widget.title
        },
        series: [{
          type: types[widget.type],
          name: widget.title,
          data: widget.datasource
        }],
        plotOptions: {
            series: {
                cursor: 'pointer',
                className: 'popup-on-click',
                marker: {
                    lineWidth: 1
                }
            }
        },
        xAxis: {
          type: 'datetime',
          labels: {
            // rotation: -45,
            style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
            },
          }
        },
        tooltip: {
            xDateFormat: '%Y-%m-%d',
            pointFormat: '{series.name}: <b>{point.y}</b><br/>',
            shared: true
        },
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'top'
        },
      };
    case 5:
      return {
        title: {
          text: widget.title
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: widget.datasource
      }
    default:
      return {
        title: {
          text: widget.title
        },
        series: [{
          type: types[widget.type],
          name: widget.title,
          data: widget.datasource
        }],
        plotOptions: {
            series: {
                cursor: 'pointer',
                className: 'popup-on-click',
                marker: {
                    lineWidth: 1
                }
            }
        },
        xAxis: {
          type: 'datetime',
          labels: {
            // rotation: -45,
            style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
            },
          }
        },
        tooltip: {
            xDateFormat: '%Y-%m-%d',
            pointFormat: '{series.name}: <b>{point.y}</b><br/>',
            shared: true
        },
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'top'
        },
      };
  }
}

export const mappedWidgets = () => {
  let data = JSON.parse(JSON.stringify(widgets));
  data = data.sort((a: Widget, b: Widget) => a.priority - b.priority);
  data.map((widget:Widget) => {
    if(typeof widget.datasource === "string") {
      fetchData(widget.datasource).then(res => res.json()).then((res: any) => {
        widget.datasource = res;
        widget.title = handleTitle(widget.type);
        return widget
      });
    }
    widget.title = handleTitle(widget.type);
    return widget;
  });
  return data;
}