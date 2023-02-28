import { Header, Posts, Footer, PostForm, Search, Login,} from './components';
import { useState, useEffect } from 'react';
import './App.css';
import { BASE_URL } from "./api";



function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState ([]);
  const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
const postsToDisplay = searchTerm.length ? filteredPosts : posts;
    console.log(posts)
    function postMatches(post,searchTerm){
      
      let results = posts.filter((go)=>{
        return posts.title==go
      })
    setSearchTerm (results)
    setPosts (results)

    }
     useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch(`${BASE_URL}/posts`);
            const result = await resp.json();
            setPosts(result.data.posts);

        }
        fetchPosts();
     }, [])
  return (
    <div className="container">
      <Header />
      <Login />
      <div className="row">
        <div className="col">
          <main>
            <Posts searchTerm={searchTerm} posts= {posts}/>
            <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} posts={posts} setPosts={setPosts} postMatches={postMatches} />
          </main>
        </div>
      <aside className="col">
        <PostForm />
      </aside>
    </div>
    <footer>
      <Footer />
    </footer>
    </div>
  );
}

export default App;
