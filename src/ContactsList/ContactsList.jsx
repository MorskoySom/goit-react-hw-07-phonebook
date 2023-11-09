import React from "react";
import { useSelector } from 'react-redux';

import { Contact } from "../Element/Element";

export const ContactList = () => {
    const persons = useSelector(state => state.contacts.data);
    const filter = useSelector(state => state.contacts.filter);
    console.log(filter);

    const getVisibleContacts = () => {
        return persons.filter(person =>
            person.name.toLowerCase().includes(filter.toLowerCase())
        );
    }

    const visibleContacts = getVisibleContacts();

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


