import React from 'react';

const PostDetailAbout = (props) => {
    const {name,email,body}=props.userPost
    return (
        <div>
            <p><code>{name}</code></p>
            <p><code>{email}</code></p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetailAbout;