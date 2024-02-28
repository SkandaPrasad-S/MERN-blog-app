import React from 'react'
import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className='postImg' alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sitsusc</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet, consecteur adipisicing elit.
                Est debitis corporis rerum autem?autem itaqentore, labo
                rum delectus mollitia placeat.
                Lorem ipsum dolor sit amet, consecteur adipisicing elit.
                Est debitis corporis rerum autem?autem itaqentore, labo
                rum delectus mollitia placeat.                Lorem ipsum dolor sit amet, consecteur adipisicing elit.
                Est debitis corporis rerum autem?autem itaqentore, labo
                rum delectus mollitia placeat.                
            </p>
        </div>
    )
}
