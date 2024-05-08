function Post(props){
    return ( 
    <div className='post'> 
        <p> {props.author} </p>
        <p> {props.body}</p>
    </div>
    );
}

export default Post;