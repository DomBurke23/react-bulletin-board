import classes from "./NewPost.module.css";

function NewPost() {
  // vanilla javascript way of handling updating - imperative approach
  // tells browser that we want to get hold of text area and add an event listener followed by what should happen
  //document.querySelector('textarea').addEventListener('change', function(){});
  // react we use declarative approach eg onKeyDown or onChange

  function changeBodyHandler(event) {
    // prints each letter out eg h he hel ..
    console.log(event.target.value);
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
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
