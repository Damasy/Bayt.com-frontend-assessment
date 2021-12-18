import React from 'react';

import './grid.css';

export default function Grid({children}:any) {
  return (
    <div className='grid-wrapper container'>
      {children}
    </div>
  )
}
