import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className="headerTitleSm">My Personal</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&q=80&w=1073&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="" className="headerImg" />
    </div>
  )
}
