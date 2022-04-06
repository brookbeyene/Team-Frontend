import React from 'react';


export default function Header(props){
    return (
      <div className="header-container">
        <div className="title-container"> Motorcycle Warehouse</div>
        <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" />
                <button onClick={props.Click} className="search-button">Search</button>
        </div>
      </div>
    );
}