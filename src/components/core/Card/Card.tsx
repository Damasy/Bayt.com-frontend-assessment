import React from 'react';

import './card.css'

export default function Card({widget, children}: any) {
  console.log(widget, 'widget in the card');

  const style = {
    order: widget.order,
    // gridColumn: `1 / ${widget.width + 1}`
  }

  return (
    <div className='card' style={style}>
      <div className='card-title'>
        {widget.title}
      </div>
      <div className='card-body'>
        {children}
      </div>
    </div>
  )
}
