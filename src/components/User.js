import React from 'react';

const User = ({ name, age, email, background }) => {
    return (
        <div className={background}>
            <h3>{ name }</h3>
            <div>{ age }</div>
            <div>{ email }</div>
        </div>
    );
};

export default User;