import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, userPost]=useState([])
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts`
        fetch(url)
        .then(res=>res.json())
        .then(data=>userPost(data))
    })
    return (
        <div>
            <h2><code>Hey i have got {posts.length}</code></h2>
            {
                posts.map(post=><Post userPost={post}></Post>)
            }
        </div>
    );
};

export default Home;