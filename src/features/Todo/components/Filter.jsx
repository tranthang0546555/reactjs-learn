import propTypes from 'prop-types';
import React, { useState, useRef } from 'react';


Filter.propTypes = {
    onFilterForm: propTypes.func,
};
Filter.defaultProps = {
    onFilterForm: null,
}

function Filter({ onFilterForm }) {

    const [filter, setFilter] = useState({ title: '' })
    const debounceSubmitForm = useRef(null)

    const handleFormChange = e => {

        if (!onFilterForm) return;
        const value = e.target.value

        if (debounceSubmitForm) clearTimeout(debounceSubmitForm.current)

        debounceSubmitForm.current = setTimeout(() => {
            onFilterForm({ ...filter, title: value })
        }, 500)

        setFilter({ ...filter, title: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={filter.title} onChange={handleFormChange} />
        </form>
    );
}

export default Filter;