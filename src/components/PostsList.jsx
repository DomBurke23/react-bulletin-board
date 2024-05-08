import Post from "./Post";
import classes from './PostsList.module.css';

function PostsList(){
    return (
    <ul className={classes.posts}>
        <Post author="Dominique" body="React.js is awesome!" />
        <Post author="Dom" body="Intro to react." />
    </ul>
    );
}

export default PostsList;