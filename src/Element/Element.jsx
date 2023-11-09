import React from "react";
import { Item, Terminator } from "./Element.styled";
import { deleteContact } from '../Redux/contactsSlice';
import { useDispatch } from 'react-redux';


export const Contact = ({ info: { name, number, id } }) => {
    const dispatch = useDispatch();

    const handleDeleteContact = (elementId) => {
        dispatch(deleteContact(elementId));
    }

    return (<Item>
        <p>{name} : {number}</p>
        <Terminator onClick={() => handleDeleteContact(id)}>Delete</Terminator>
    </Item>)
}

