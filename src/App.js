import React from 'react'
import './App.css';
import SideBar from './Componant/SideBar Section/SideBar';
import Body from './Componant/Body Section/Body';
import Activity from './Componant/Body Section/Activity Section/Activity';
function App() {
  return (
    <div className='Container'>
      <SideBar/>
      <Body/>
      <Activity/>
      

    </div>
  )
}

export default App