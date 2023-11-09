import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { ContactList } from "ContactsList/ContactsList";
import { ContactForm } from "ContactForm/ContactForm";
import { Filter } from "Filter/Filter";
import { Container } from 'App.styled'

export const App = () => {
    const [contacts, setContacts] = useState([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const savedContacts = localStorage.getItem('contacts-list');
        if (savedContacts !== null) {
            setContacts(JSON.parse(savedContacts));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(`contacts-list`, JSON.stringify(contacts));
    }, [contacts])

    const addContact = newContact => {
        const { name, number } = newContact;

        if (checkIfContactExists(name, number)) {
            alert(`Contact with name ${name} or number ${number} already exists!`);
            return;
        }

        setContacts((prevContacts) => [
            ...prevContacts, { ...newContact, id: nanoid() },
        ]);
    }

    const checkIfContactExists = (name, number) => {
        const existingContact = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase() ||
                contact.number === number
        );
        return existingContact;
    }

    const changeFilter = (newFilter) => {
        setFilter(newFilter);
    }

    const deleteContactElement = (elementId) => {
        setContacts(prevContacts =>
            prevContacts.filter(contact => elementId !== contact.id)
        )
    }

    const getVisibleContacts = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }

    const visibleContacts = getVisibleContacts();

    return (
        <Container>
            <h1>Phonebook</h1>
            <ContactForm toAdd={addContact} />
            <h2>Contacts</h2>
            <Filter filterName={filter} toSearch={changeFilter} />
            <ContactList persons={visibleContacts} toDelete={deleteContactElement} />
        </Container>
    )
}

