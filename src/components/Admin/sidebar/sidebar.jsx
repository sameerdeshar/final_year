import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';
import Users from "../Users/users"

function openNav() {
      let sideBar = document.getElementById("mySidebar")
      let main = document.getElementById("main")
      if(sideBar.style.width === "0px" || main.style.width === "0px") {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
      } else {
            document.getElementById("mySidebar").style.width = "0px";
            document.getElementById("main").style.marginLeft = "0px";
      }
    }
function slidebar(){
      return(     
      <>
      <div>
      <div id="mySidebar" className="sidebar">
            <div className='imgContainerSidebar'>
            <img src="../images/icon.png" width="150px" alt="logo for sidebar" />
            </div>
                  <ul>
                  <li><Link to="/"><i class="fas fa-home"></i> Dashboard</Link></li>
                  <li><Link to="/"><i class="fas fa-users"></i> Users</Link></li>
                  <li><Link to="/"><i class="fas fa-user-shield"></i> Admin Profiles</Link></li>
                  <li><Link to="/"><i class="fas fa-store"></i> Restaurants</Link></li>
                  <li><Link to="/"><i class="fas fa-motorcycle"></i> Drivers</Link></li>
                  <li><Link to="/"><i class="fas fa-flag"></i> Reports</Link></li>
                  <li><Link to="/"><i class="fas fa-cog"></i> Settings</Link></li>
                  <li><Link to="/"><i class="fas fa-sign-out-alt"></i> Sign Out</Link></li>

                  </ul>

      <span className='adminCopyRight'>
      <p>Developed by <a target="_blank" src="https://twitter.com/azzmmii">AzmiTammam</a> <br/> All rights reserved &copy; 2022</p>
      </span>
      </div>
      <div id="main">
      <button className="openbtn" onClick={openNav}><i class="fas fa-chevron-right"></i></button>
      <h2>Admin Dashboard</h2>
            <Users />

      </div>
      </div>
      </>
      );
}


export default slidebar;