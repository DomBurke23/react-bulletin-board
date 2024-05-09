import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostsList({ isVisible, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
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

  // TODO replace and dynamically render posts here
  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post author="Dom" body="Intro to react." />
      </ul>
    </>
  );
}

export default PostsList;
