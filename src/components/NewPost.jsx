// functions that start with use in react are considered hooks.
// hooks must be executed inside a component function
// hooks can not be executed in regular javascript functions
// hooks typically change something about that component or how react behaves with that component.
import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost() {
  // register state
  const [enteredBody, setEnteredBody] = useState("");

  // vanilla javascript way of handling updating - imperative approach
  // tells browser that we want to get hold of text area and add an event listener followed by what should happen
  //document.querySelector('textarea').addEventListener('change', function(){});
  // react we use declarative approach eg onKeyDown or onChange

  function changeBodyHandler(event) {
    // prints each letter (keystroke) out eg h he hel ..
    console.log(event.target.value);
    setEnteredBody(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          // sets up an event listner
          onChange={changeBodyHandler}
        />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
