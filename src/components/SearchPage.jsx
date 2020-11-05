import React from 'react';
import Header from './Header';
import Card from '../components/molecules/Card';

export default function SearchPage({ information }) {
    console.log("information:",information);
    const cards = information.map((item) => {
        return <Card key={item.id} data={item} />
    })
    return (
        <div>
            <Header />
            <h1>Package Tracking -- Enter the id</h1>
            {cards}
        </div>
    );
}