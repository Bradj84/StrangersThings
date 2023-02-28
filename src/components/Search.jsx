import React, {useState} from 'react';


 const Search = ({setSearchTerm, searchTerm, posts, setPosts,searchable}) => {



//const [posts, setPosts] = useState([]);
//const [searchTerm, setSearchTerm] = useState('');

function postMatches(post, text) {
   //return true if any of the fields you want to check against include the text
  // strings have an .includes() method 
  

}
//const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
//const postsToDisplay = searchTerm.length ? filteredPosts : posts;
console.log(searchTerm)
return (
  <div>
  <label for="site-search">Search the site:</label>
<input type="search" id="site-search" onChange={event => postMatches(event.target.value)} name="q"/>

<button onClick={postMatches}>Search</button>
</div>
)
}
export default Search

// then, in our jsx below... map over postsToDisplay instead of posts

