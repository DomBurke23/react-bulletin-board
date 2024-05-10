import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState, useEffect } from "react";

function PostsList() {
  /* the following causes an infinite loop
  fetch("http://localhost:8080/posts").then(
    (response) => response.json()
    .then(data => {setPosts(data.posts)}));*/
  const [posts, setPosts] = useState([]);

  const [isFetching, setIsFetching] = useState(false);

  //fetch the data of existing posts
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      if (!response.ok) {
        // TODO output error message here
      }
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // ...posts is there so that we dont override any previous posts
    // this is not optimal
    //setPosts([postData, ...posts]);
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  // key should be a unique id, for this example body is fine
  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p> Start adding some! </p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading Posts...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
