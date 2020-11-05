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
            <h1>Search Page</h1>
            {cards}
        </div>
    );
}