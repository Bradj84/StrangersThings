import React, { useState, useEffect } from "react";
import { BASE_URL } from "../api";
const Posts = ({posts}) => {
    
    return (
      <>
        <p className="users">User Posts</p>
        {posts.map((post) => (
          <div key={post.id} className="card">
            <div>{post.title}</div>
            <div>{post.description}</div>
            <div> {post.price}</div>
            <div>{post.location}</div>
          </div>
        ))}
      </>
    );
    }
     export default Posts;













