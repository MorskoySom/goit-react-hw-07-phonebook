import React from "react";
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../Redux/selectors'
import { Contact } from "../Element/Element";

export const ContactList = () => {
    // const persons = useSelector(selectContacts);
    // const filter = useSelector(selectFilter);

    // const getVisibleContacts = () => {
    //     return persons.filter(person =>
    //         person.name.toLowerCase().includes(filter.toLowerCase())
    //     );
    // }

    // const visibleContacts = getVisibleContacts();
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


