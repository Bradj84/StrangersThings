import { Header, Posts, Footer, PostForm, Search, Login, Register} from './components';
import { useState, useEffect } from 'react';
import './App.css';
import { BASE_URL } from "./api";
export const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N…3NTV9.8Au32ePAlAltGyCjrJzJ3HovW67WtkuPt_I2OMfF834`



function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState ([]);
  const[token, setToken] = useState('')

//   const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
// const postsToDisplay = searchTerm.length ? filteredPosts : posts;
//     console.log(posts)
     function postMatches(post,searchTerm){
      
//       let results = posts.filter((go)=>{
//         return posts.title==go
//       })
//     setSearchTerm (results)
//     setPosts (results)

     }
     


     useEffect(() => {
      const savedToken = localStorage.getItem('token')
      if(savedToken) {
        setToken(savedToken)

      }
        const fetchPosts = async () => {
          try {

          
            const resp = await fetch(`${BASE_URL}/posts`);
            const result = await resp.json();
            setPosts(result.data.posts);
          } catch (err) {
            console.log(err)
          }
        }
        fetchPosts();
     }, [])
     const savedToken = localStorage.getItem('token')
  return (
    <div className="container">
      <Header />
      <Login setToken={setToken}/>
      <Register setToken={token}/>
      <div className="row">
        <div className="col">
          <main>
            <Posts searchTerm={searchTerm} posts= {posts}/>
            <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} posts={posts} setPosts={setPosts} postMatches={postMatches} />
          </main>
        </div>
      <aside className="col">
        <PostForm setPosts={setPosts} savedToken={savedToken}/>
      </aside>
    </div>
    <footer>
      <Footer />
    </footer>
    </div>
  );
}

export default App;
