import classes from "./NewPost.module.css";

/* 
by default if you add buttons to a form , if they are pressed, they will submit that form , meaning a submit event will be generated and also by default the browser will generate AND send an HTTP request to the server that is serving the website.
we are going to prevent that here, as we want to handle it with out client side code instead. 
we want to make sure only subit button submits, and not cancel. 
cancel buttons does not trigger form submission due to the type attribute added 
*/

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          // sets up an event listner
          onChange={props.onBodyChange}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
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
