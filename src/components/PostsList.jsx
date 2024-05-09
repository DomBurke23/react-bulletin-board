// functions that start with use in react are considered hooks.
// hooks must be executed inside a component function
// hooks can not be executed in regular javascript functions
// hooks typically change something about that component or how react behaves with that component.
import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList({ isVisible, onStopPosting }) {
  // register state
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  // vanilla javascript way of handling updating - imperative approach
  // tells browser that we want to get hold of text area and add an event listener followed by what should happen
  //document.querySelector('textarea').addEventListener('change', function(){});
  // react we use declarative approach eg onKeyDown or onChange

  function bodyChangeHandler(event) {
    // prints each letter (keystroke) out eg h he hel ..
    console.log(event.target.value);
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  let modalContent;
  if (isVisible) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
          onCancel={onStopPosting}
        />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Dom" body="Intro to react." />
      </ul>
    </>
  );
}

export default PostsList;
