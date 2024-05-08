function Post(props){
    return ( 
    <div style={{color:'pink',textAlign:'left'}}> 
        <p> {props.author} </p>
        <p> {props.body}</p>
    </div>
    );
}

export default Post;