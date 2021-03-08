import React from 'react';

const Images = (props) => {
    const {title,thumbnailUrl,id}=props.image
    return (
        <div>
            <h4><code>{
                title
            }</code></h4>
            <img src={thumbnailUrl} alt=""/>
            <h5><code>{id}</code></h5>
        </div>
    );
};

export default Images;