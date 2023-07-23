import React, { useState } from 'react'
import './Listing.css'
import { FaCaretDown } from "react-icons/fa6";
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';
import CircularProgressBar1 from '../CircularProgressBar/CircularProgressBar1';
import CircularProgressBar2 from '../CircularProgressBar/CircleProgressBar2';

function Listing() {
  const[percentage]= useState(35);
  return (
    <div>
    <div className='content'>
    <h3>How do I compare to my peers?</h3>
    <h5>These numbers represent current goal achievement</h5>
    </div>
    <div className='flex'>
      <div>
    <p>Age : Under 30<FaCaretDown   size={'20px'}/></p>
    <p>Salary : K 20 - K 30<FaCaretDown   size={'20px'}/></p>
    <p>Gender : Male<FaCaretDown   size={'20px'}/></p>
    </div>
    <div className='flex'> 
     <CircularProgressBar percentage={percentage} circlewidth="200"/>
     <CircularProgressBar1 percentage={percentage} circlewidth="200"/>
     <CircularProgressBar2 percentage={percentage} circlewidth="200"/>
    </div>
    </div>
    </div>    

  )
}

export default Listing