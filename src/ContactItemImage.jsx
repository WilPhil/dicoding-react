import React from "react";

function ContactItemImage({imageUrl}) {
    return (
        <div className="content-item__image">
            <img src={imageUrl} alt="image avatar" />
        </div>
    );
}

export default ContactItemImage;