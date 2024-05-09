// functions that start with use in react are considered hooks.
// hooks must be executed inside a component function
// hooks can not be executed in regular javascript functions
// hooks typically change something about that component or how react behaves with that component.
import { useState } from "react";

import classes from "./NewPost.module.css";

/* 
by default if you add buttons to a form , if they are pressed, they will submit that form , meaning a submit event will be generated and also by default the browser will generate AND send an HTTP request to the server that is serving the website.
we are going to prevent that here, as we want to handle it with out client side code instead. 
we want to make sure only subit button submits, and not cancel. 
cancel buttons does not trigger form submission due to the type attribute added 
*/

function NewPost(props) {
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

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    console.log(postData);
    props.onAddPost(postData);
    props.onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          // sets up an event listner
          onChange={bodyChangeHandler}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
