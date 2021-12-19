import React from 'react';

import './card.css'

export default function Card({widget, children}: any) {
  console.log(widget, 'widget in the card');

  const style = {
    order: widget.order,
    height: `${widget.size.height || 450}px`,
    gridRow: widget.size.gridRow,
    gridColumn: widget.size.gridCol,
  }
  console.log(style, '??')
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
