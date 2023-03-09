import React, { useState, useEffect } from "react";
import { BASE_URL } from "../api";
export default function Posts({posts}) {
  //const[posts, setPosts] = useState([])
  const[currentPosts, getCurrentPosts] = useState([])



useEffect(() => {
  
  async function currentPosts() {
      try{
          const response = fetch(`${BASE_URL}/posts`)
          let result = await response.json()
          getCurrentPosts(result.data.posts)

      } catch(err){
          console.log(err)
      }
  } 
  currentPosts();
}, [])

return posts.map( post => {
  return (
      <div key={post._id} className="card">
          <div>{post.title}</div>
          <div>{post.description}</div>
          <div>{post.price}</div>
          <div>{post.willDeliver}</div>
      </div>
  )
})
}
























