import React from 'react'
import './Top.css'


function Top() {
  return (
  <div className='topsection grid'>
    <div className='headsection flex'>
      <div className='title'>
  <span className='head'>Retirement Income</span>
  <h2>Starting year 2056</h2>
  </div>
  </div>
  <div className='flex'>
  <div className='col-lg-4 col-md-12 summary'>
  <h1> 
    $300,000
  </h1>
  <h4 className='daily'>My Goal</h4> 
  </div>
  <div className='col-lg-4 col-md-6 summary'>
  <h1> 
    59%
  </h1>
  <h4 className='daily'>Goal Achieved</h4>
 </div>
 <div className='col-lg-4 col-sm-6  summary'>
  <h1> 
    $300
  </h1>
  <h4 className='daily'>Est. Monthly Income</h4>
   </div>
 </div>
  
  </div>
  
  )
}

export default Top