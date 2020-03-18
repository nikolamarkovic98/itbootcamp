import React from 'react';

const Contact = props => {
    return (
        <div className="contact">
            <p>Contact name: {props.name}</p>
            <p>Contact phone: {props.phone}</p>
        </div>
    )
}

export default Contact;