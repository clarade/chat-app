import React from 'react';
import './Contact.css';

function Contact({name, alt, avatar, online}) {
    return (
    <div className = 'Contact'>
        <img src = {avatar} alt ={alt} className="avatar"/> 
        <div>
            <h1 className="name">{name}</h1>
            <div className="status Align">
                <div className={online ? "status-online" : "status-offline" }></div>
                <div className="status-text">{online ? "Online" : "Offline" }</div>
            </div>
        </div>
    </div>
    )

}

export default Contact;