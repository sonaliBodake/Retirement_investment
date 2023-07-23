import React from 'react'
import './SideBar.css'
import logo from '../../Assets/logo.jpg'

import { FaCaretDown } from "react-icons/fa6";
import Dropdown from 'react-bootstrap/Dropdown';




function SideBar() {
   // const [click, setClick]=useState(false);
    //const closemobileview=()=>setClick(false);
  return (
    
    <div className='sideBar grid'>
        
      <div className='logoDiv flex'>
        <image src={logo} alt='Image name'/>
       <div><h1>Hi Mike,</h1>
       <span>welcome back.</span></div>
      </div>
        
      <div className='menuDiv'>
        <h3 className='divTitle'>
         Today
        </h3>
        <ul className="menulist grid">
          <li className="listitem">
               <h1>$19,892</h1>
               <h5>
                Account Balance
               </h5>
          </li>
          <li className="listitem">
            <h3>
                $4,000
            </h3> 
            <h5>
                Year-to-Date Contribution
               </h5>
           
          </li>

          <li className="listitem">
          <h3>
                $1,892
            </h3> 
            <h5>
                Total Interest
               </h5>
           
          </li>
          <li > 
          <Dropdown className=''>
        <Dropdown.Toggle>
          I want to <FaCaretDown className='icon drop'  size={'25px'}/>
        </Dropdown.Toggle>
      
      </Dropdown>
       
          </li>
       
          </ul>
          
          </div>
        
     
        
    
    
        
      <div className='settingDiv grid'>
        <h3 className='divTitle'>
         Recent Transactions
        </h3>
        <ul className="menulist grid">
          <li className="listitem">
           <h5>2020-08-07</h5>
           <h4>Withdrawl Transfer to Bank-XXX11</h4>
          </li>

          <li className="listitem">
           <h5>2020-07-21</h5>
           <h4>Withdrawl Transfer to Bank-XXX11</h4>
          </li>
          <li className="listitem">
           <h5>2020-07-16</h5>
           <h4 className='info'>Withdrawl Transfer to Bank-XXX11</h4>
          </li>

        </ul>
       
      </div>
    </div>
   
  )
}

export default SideBar
