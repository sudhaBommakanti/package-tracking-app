import React from 'react';
import '../css/modules/header.css';

export default function Header() {
    return(
        <header>
            <div className= "header">
            <form className="example">
                <input type="text" placeholder="Search.." name="search2" />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
               
            </div>
        </header>
    );
}