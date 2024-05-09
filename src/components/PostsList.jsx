import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostsList({ isVisible, onStopPosting }) {
  const [posts, setPosts] = useState([]);

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

  let modalContent;
  if (isVisible) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
      </Modal>
    );
  }

  // key should be a unique id, for this example body is fine
  return (
    <>
      {modalContent}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p> Start adding some! </p>
        </div>
      )}
    </>
  );
}

export default PostsList;
