import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
const {id, title,body}=props.userPost
let history=useHistory()
const HandleClick=(id)=>{
    history.push(`/post/${id}`)
}
    return (
        <div>
            <h3> <code> <span>{id}</span>  -  {title}</code></h3>
            <h4><code><p>{body}</p></code></h4>
            <button onClick={()=>HandleClick(id)}>Show Details</button>

        </div>
    );
};

export default Post;