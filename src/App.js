import React from "react";
import "./App.css";
import Blog from "./posts.json";
import Post from "./components/Post";
import Posts from "./components/Posts";

function App() {

    const [post, setPost] = React.useState(Blog[0])
    const selectPost = (selected) => {
      setPost(selected)
    }
    return (
      <div className="App">
        <h1>My Blog</h1>
        <Posts posts={Blog} select={selectPost}/>
        <Post post={post}/>
      </div>
    );
  }

export default App;
