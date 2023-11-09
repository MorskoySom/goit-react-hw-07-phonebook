import React from "react";
import { Filt } from "./Filter.styled";
import { useDispatch } from 'react-redux';
import { setFilter } from '../Redux/contactsSlice';

const handleInputChange = (evt, toSearch) => {
    toSearch(evt.target.value);
}

export const Filter = ({ filterName, toSearch }) => {
    const dispatch = useDispatch();
    const handleFilterChange = (newFilter) => {
        dispatch(setFilter(newFilter));
    }

    return (
        <Filt>
            Filter
            <input
                type="text"
                value={filterName}
                placeholder="name"
                onChange={evt => handleInputChange(evt, handleFilterChange)}
            />
        </Filt>
    );
}
