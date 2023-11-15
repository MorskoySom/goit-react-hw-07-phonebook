import React from "react";
import { Item, Terminator } from "./Contact.styled";
import { deleteContact } from '../Redux/operations';
import { useDispatch } from 'react-redux';


export const Contact = ({ info: { name, phone, id } }) => {
    const dispatch = useDispatch();

    const handleDeleteContact = (elementId) => {
        dispatch(deleteContact(elementId));
    }

    return (<Item>
        <p>{name} : {phone}</p>
        <Terminator onClick={() => handleDeleteContact(id)}>Delete</Terminator>
    </Item>)
}

