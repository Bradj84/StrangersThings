import React, { useState } from 'react';
import { SavePost,BASE_URL } from '../api';

//import { token } from '../App';
export const PostForm = ({savedToken}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [delivery, setDelivery] = useState(false);
    const [posts, refreshPosts] = useState([]);
    const handleSubmit = async (event) => {
        
        event.preventDefault();
        const newPost = {title, description, price, willDeliver:delivery}
        const refreshPosts = await SavePost(savedToken, newPost)
            console.log('This is token in PostForm', savedToken)
            try {
                const response = await fetch(`${BASE_URL}/posts`)
                    let result = await response.json()
                    refreshPosts(result.data.posts)      
            } catch(errorObj) {
                console.error(errorObj)
            }
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
  return ( 
    <form id='postForm' onSubmit={handleSubmit}>
      <h3 id="formTitle">Create New Post!</h3>
        <br/>
        <label>Title: </label>
        <br/>
            <input 
                placeholder='Title'
                type="text"
                value={title}
                onChange={(event) => {setTitle(event.target.value)}}
            />
        <br/>
        <label>Item Description: </label>
        <br/>
            <textarea
                style={{height: "100px"}}
                placeholder="Item Description"
                type="text"
                value={description}
                onChange={(event) => {setDescription(event.target.value)}}
            />
        <br/>
        <label>Price: </label>
        <br/>
            <input 
                placeholder='Price in dollars'
                type="text" 
                value={price} 
                onChange={(event) => {setPrice(event.target.value)}} 
            />
        <br/>
        <label>Will Deliver: </label>
        <br/>
            <select 
                type='boolean' 
                value={delivery} 
                onChange={(event) => {setDelivery(event.target.value)}}
            >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        <br/>
        <button typeof='submit'>Post It!</button>
        <br/>
      </form>
    
  );
};
export default PostForm;












