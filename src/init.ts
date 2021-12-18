import { Widget } from './models/index';

const widgets: Widget[] = [
  new Widget({
    "type": 2,
    "datasource": "https://run.mocky.io/v3/ce284c78-a279-41e6-8e60-29c5994e73f6",
    "priority": 2,
    "order": 3,
    "position": 12,
    "width": 1
  }),
  new Widget(
  {
    "type": 1,
    "datasource": [],
    "priority": 5,
    "order": 4,
    "position": 11,
    "width": 2
  }),
  new Widget(
  {
    "type": 1,
    "datasource": [],
    "priority": 4,
    "order": 5,
    "position": 5,
    "width": 2
  }),
  new Widget(
  {
    "type": 4,
    "datasource": [],
    "priority": 8,
    "order": 4,
    "position": 12,
    "width": 3
  }),
  new Widget(
  {
    "type": 2,
    "datasource": [],
    "priority": 10,
    "order": 3,
    "position": 4,
    "width": 1
  })
];

export {
  widgets
}