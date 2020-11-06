import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import SearchComponent from '../templates/SearchComponent';
import Card from '../molecules/Card';

export default function HomePage() {

    return (
        <div>
            {/* <Header /> */}
            <SearchComponent />
            
            <Footer />
        </div>
    );
}