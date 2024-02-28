import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom';

export default function TopBar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-square-x-twitter"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to="/" className="link">ABOUT</Link></li>
                    <li className='topListItem'>
                        <Link to="/" className="link">CONTACT</Link></li>
                    <li className='topListItem'>
                        <Link to="/write" className="link">WRITE</Link></li>
                    <li className='topListItem'>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=1160&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                    )
                        : (
                            <ul className="topList">
                                <li className='topListItem'>
                                    <Link to="/login" className="link">LOGIN</Link>
                                </li>
                                <li className='topListItem'>
                                <Link to="/register" className="link">REGISTER</Link>
                                </li>
                            </ul>
                        )}

                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
