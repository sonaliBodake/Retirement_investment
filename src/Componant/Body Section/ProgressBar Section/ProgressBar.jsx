import React, { useState } from 'react'
import './ProgressBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import Card from "react-bootstrap/Card";
function ProgressBar() {
    const [percentage, setpercentage]=useState(35);
  return (
    <div className='bar'> 
     <span>Employee Contribution</span>
    
    <input type='range' 
    min={1} 
    max={60} 
    step={1} 
    className='progress-bar'
    value={percentage} 
    onChange={(ev)=> setpercentage(ev.target.value)}
    />
    <span>Retirement Age</span>
    <input type='range' 
    min={1} 
    max={40} 
    step={1} 
    className='progress-bar'
    value={percentage} 
    onChange={(ev)=> setpercentage(ev.target.value)}
    /><hr/>
    <div className='text'>
    <span>Employer Contribution</span>
    <span>   8.4%</span></div>
    <div>
      <span>Interest Rate   5%</span>
    </div>
    <button className='btn'>Update</button>
    <div className='bottom-icon'>
    <span className='bottom'>View Help Docs
    
    </span>
    <FontAwesomeIcon icon={faGreaterThan} size='sm' style={{color: "blue",}} /></div>
    <div>
    <Card className='card'>
            <Card.Body>
              <Card.Title className='maintext'>Are you considering a</Card.Title>
              <Card.Subtitle className="subtext">
                Housing Advance?
              </Card.Subtitle>
              <Card.Text className='text3'>
                Limited time reduced interest.
              </Card.Text>
              <Card.Link href="#" className='link'> Learn More
              <FontAwesomeIcon icon={faGreaterThan} size='sm' style={{color: "blue",}} /> </Card.Link>
            </Card.Body>
          </Card>
    </div>
    </div>
  )
}

export default ProgressBar