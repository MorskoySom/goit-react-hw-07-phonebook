import React from "react";
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../Redux/selectors'
import { Contact } from "../Element/Element";

export const ContactList = () => {
    const persons = useSelector(getContacts);
    const filter = useSelector(getFilter);

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


