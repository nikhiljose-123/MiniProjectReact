import React from 'react'
import "./SideBar.css"
// import {Link} from 'react-router-dom';

function SideBar() {
  return (
    <div>
      <div className='sidebar'>
        
            <div className='d1'>
                <h1 className='details'>My Profile</h1>
                
                <img src="./images/user.png"className='pics' alt="" />
            </div>
            
            <div className='d2'>
            
                <h1 className='details' >My Orders</h1>
                <img src="./images/myorder.png"className='pics1' alt="" />
            </div>  
            <div className='d3'>
                <h1 className='details'>Order</h1>
                <img src="./images/order.png"className='pics2' alt="" />
            </div>  
            <div className='d4'>
                 <h1 className='details'>Customise Order</h1>
                 <img src="./images/cusorder.png"className='pics3' alt="" />
            </div>
           <div className='d5'>
                <h1 className='details'>Change Location </h1>
                <img src="./images/loc.png"className='pics4' alt="" />
            </div> 
            <div className='but'>
              <button className='button'>Log Out</button>
                </div>
            
        </div>
        
        </div>
    
  )
}

export default SideBar
