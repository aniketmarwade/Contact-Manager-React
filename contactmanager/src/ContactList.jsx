import React from 'react';
import ContactCard from './components/ContactCard';

function ContactList() {
    return (
        <div className="container pt-3 ">
            <div className="uilist">
                <h2>Contact List</h2>
                < ContactCard />
                < ContactCard />
            </div>
        </div>
    )
}

export default ContactList
