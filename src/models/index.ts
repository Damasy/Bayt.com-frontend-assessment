import { types } from "./enums";

/**
 *
 *
 * @export
 * @interface Widget
 */
export interface Widget {
  type?: types; // 'chart-pie' - 'numeric' - 'chart-line'
  datasource: any[] | string; // mock data or API URL.
  order: number;
  width: string; // 'center' - 'left' - 'right'
  size: number; // number below 12. EX: 6
  priority: number; // 1
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
    this.width = data.width;
    this.size = data.size;
    this.priority = data.priority;
  }
}