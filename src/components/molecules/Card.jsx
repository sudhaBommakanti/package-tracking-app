import React from 'react';

export default function Card({ data }) {
    const {
        status, 
        eta, 
        location_name, 
        sender,
        user_name,
        user_phone
     } = data;
    return(
        <article className= "card">
            <div>
                <h1>{user_name}</h1>
                <p>{status}</p>
                <p>{location_name}</p>
                <p>{sender}</p>
                <p>{ eta}</p>
                <p>{user_phone}</p>
            </div>
        </article>
        
    );
}