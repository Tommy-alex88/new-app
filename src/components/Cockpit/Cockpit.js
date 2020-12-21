import React from 'react';
import './Cockpit.css'

const cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    let classes = ['red', 'bold'].join(' ');

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes} > This is really working</p>
            <button
                style={style}
                onClick={props.clicked} >Toggle persons</button>
        </div>

    );
};

export default cockpit;