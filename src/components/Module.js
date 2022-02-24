import React from 'react';

const Module = ({ name, duration ="7 semanas", teacher, bg}) => {
    return (
        <div className={bg}>
            <div>{name}</div>
            <div>{duration}</div>
            <div>{teacher}</div>
        </div>
    );
};

export default Module;