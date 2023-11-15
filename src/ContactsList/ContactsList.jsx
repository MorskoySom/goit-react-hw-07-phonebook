import React from "react";
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../Redux/selectors'
import { Contact } from "../Contact/Contact";

export const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts);


    return (
        <ul>
            {visibleContacts.map(person => (
                <li key={person.id}>
                    <Contact info={person} />
                </li>
            ))}
        </ul>
    );
};


