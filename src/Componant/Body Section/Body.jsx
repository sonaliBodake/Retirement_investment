import React from 'react'
import './Body.css'
import Top from './Top Section/Top'
import Listing from './Listing Section/Listing'


import StackedChart from './Chart Section/StackedChart'



function Body() {
  return (
    <div className='mainContent'>
      <Top/>
       
      <div className='bottom flex'>
        <StackedChart/>
        
        
      </div>
     <Listing/>
     
    </div>

  )
}

export default Body