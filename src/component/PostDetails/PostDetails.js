import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Images from '../Images/Images';
import PostDetailAbout from '../PostDeatilAbout/PostDetailAbout';



const PostDetails = () => {
    const {id}=useParams()
    const [postDetails, setPostDetails]=useState({})
    const [images,setImages]=useState([])
    const [comments, setComments]=useState([])
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPostDetails(data))
    },[id])
  
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/photos?albumId=${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setImages(data))
    },[id])
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[id])
    return (
        <div>
            <h3><code>here you will be know about user details {id}</code></h3>
            <p><code>{postDetails.title}</code></p>
            <p><code>{postDetails.body}</code></p>
            <div>
               {
                   images.map(img=><Images image={img}></Images>)
               }

            </div>
            <div>
                {
                    comments.map(comment=><PostDetailAbout userPost={comment}></PostDetailAbout>)
                }
            </div>
        </div>
    );
};

export default PostDetails;