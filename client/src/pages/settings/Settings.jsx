import React from 'react'
import './settings.css'

import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">
            Update your account
          </span>
          <span className="settingsDeleteTitle">
            Delete account
          </span>
        </div>
        <form action="" className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=1160&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" name="" id="fileInput" style={{display:"none"}} />
          </div>
          <label >Username</label>
          <input type="text" placeholder='Skanda'/>
          <label >Email</label>
          <input type="email" placeholder='Skanda@gmail.com'/>
          <label >Password</label>
          <input type="password"/>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
