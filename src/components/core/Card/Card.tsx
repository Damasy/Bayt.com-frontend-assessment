import React from 'react';

import './card.css'

export default function Card({widget}: any) {
  console.log(widget, 'widget');

  const style = {
    order: widget.order,
    // gridColumn: `1 / ${widget.width + 1}`
  }

  return (
    <div className='card' style={style}>
      priority: {widget.priority}
      <br/>
      order: {widget.order}
    </div>
  )
}
