import { Widget } from './models/index';

const widgets: Widget[] = [
  
  new Widget(
    {
      "type": 7,
      "datasource": [+8765532],
      "priority": 10,
      "order": 1,
      size: {
        height: 90
      }
    }),
    new Widget(
    {
      "type": 7,
      "datasource": [+23231],
      "priority": 10,
      "order": 1,
      size: {
        height: 90,
        gridRow: '2/2'
      }
    }),
    new Widget(
    {
      "type": 7,
      "datasource": [-23232],
      "priority": 10,
      "order": 2,
      size: {
        height: 90
      }
    }),
    new Widget(
    {
      "type": 7,
      "datasource": [+76778],
      "priority": 10,
      "order": 2,
      size: {
        height: 90,
        gridRow: '2/2'
      }
    }),
  new Widget({
    "type": 3,
    "datasource": [
      {
      name: 'Installation',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
      name: 'Manufacturing',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
      name: 'Sales & Distribution',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
      name: 'Project Development',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
      name: 'Other',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],
    "priority": 2,
    "order": 4,
    size: {
      gridRow: 'span 2',
      gridCol: 'span 2'
    }
  }),
  new Widget(
  {
    "type": 1,
    "datasource": [
      {
      name: 'Brands',
      colorByPoint: true,
      data: [
        {
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: 'Internet Explorer',
        y: 11.84
      }, {
        name: 'Firefox',
        y: 10.85
      }, {
        name: 'Edge',
        y: 4.67
      }, {
        name: 'Safari',
        y: 4.18
      }, {
        name: 'Sogou Explorer',
        y: 1.64
      }, {
        name: 'Opera',
        y: 1.6
      }, {
        name: 'QQ',
        y: 1.2
      }, {
        name: 'Other',
        y: 2.61
      }]
    }],
    "priority": 5,
    "order": 3,
    size: {
      gridRow: 'span 3'
    }
  }),
  new Widget(
  {
    "type": 5,
    "datasource": [{
      type: 'column',
      colorByPoint: true,
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      showInLegend: false
    }],
    "priority": 4,
    "order": 5,
    size: {
      gridCol: 'span 2'
    }
  }),
  new Widget(
  {
    "type": 2,
    "datasource": [{
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'countries',
      data: [{
        name: 'Spain',
        y: 505370,
        z: 92.9
      }, {
        name: 'France',
        y: 551500,
        z: 118.7
      }, {
        name: 'Poland',
        y: 312685,
        z: 124.6
      }, {
        name: 'Czech Republic',
        y: 78867,
        z: 137.5
      }, {
        name: 'Italy',
        y: 301340,
        z: 201.8
      }, {
        name: 'Switzerland',
        y: 41277,
        z: 214.5
      }, {
        name: 'Germany',
        y: 357022,
        z: 235.6
      }]
    }],
    "priority": 8,
    "order": 4,
    size: {
      gridRow: 'span 2'
    }
  }),
];

export {
  widgets
}