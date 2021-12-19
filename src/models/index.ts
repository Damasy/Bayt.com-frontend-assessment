import { types } from "./enums";

/**
 *
 *
 * @export
 * @interface Widget
 */
export interface Widget {
  type: types; // 'chart-pie' - 'numeric' - 'chart-line'
  datasource: any[] | string; // mock data or API URL.
  order: number;
  priority: number; // 1
  size: Size;
  title?: string;
}

export interface Size {
  width?: number;
  height?: number;
  position?: number;
  gridRow?: string;
  gridCol?: string;
}

/**
 *
 *
 * @export
 * @class Widget
 * @implements {Widget}
 */
export class Widget implements Widget {
  constructor(data: Widget) {
    this.datasource = data.datasource;
    this.type = data.type;
    this.order = data.order;
    this.size = data.size;
    this.priority = data.priority;
    this.title = data.title;
  }
}