import React from 'react'
import './Activity.css'
import ProgressBar from '../ProgressBar Section/ProgressBar'
function Activity() {
 
  return (
    <div className='Activity grid'>
      <div className='data'>
      <h3>Retirement Strategy</h3></div>
      <div>
      <ProgressBar bgcolor="blue" progress='60'  height={90} />
      
      </div>
    </div>
  )
}

export default Activity