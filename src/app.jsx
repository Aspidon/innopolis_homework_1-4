import React from 'react';
import style from './style.css';

export const App = () => {
    console.log(style);
    return (
        <div className={style.mainHeader}>
            Hello World
        </div>
    )
}