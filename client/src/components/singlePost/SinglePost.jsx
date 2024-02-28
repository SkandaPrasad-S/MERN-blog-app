import React from 'react'
import './singlePost.css'
export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             alt="" className="singlePostImg" />
             <h1 className="singlePostTitle">
                Lorem, ipsum dolor sit amet.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i class="singlePostIcon fa-solid fa-trash"></i>
                </div>
             </h1>
             <div className="singlePostInfo">
                <span className="singlePostAuthor">Author : <b>Skanda</b></span>
                <span className="singlePostDate">1 hour ago</span>
             </div>
             <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                In voluptatem aperiam a magnam nam, dolorem reprehenderit 
                consequatur temporibus! Autemure ex odio provident ipsam dignissimos recusandae, lau
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                In voluptatem aperiam a magnam nam, dolorem reprehenderit 
                consequatur temporibus! Autemure ex odio provident ipsam dignissimos recusandae, lau
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                In voluptatem aperiam a magnam nam, dolorem reprehenderit 
                consequatur temporibus! Autemure ex odio provident ipsam dignissimos recusandae, lau
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                In voluptatem aperiam a magnam nam, dolorem reprehenderit 
                consequatur temporibus! Autemure ex odio provident ipsam dignissimos recusandae, lau
             </p>
        </div>
    </div>
  )
}
