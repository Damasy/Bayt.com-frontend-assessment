import React from 'react';

import './grid.css';

export default function Grid({children}:any) {
  console.log(children, 'children')
  return (
    <div className='grid-wrapper container'>
      {children}
    </div>
  )
}
