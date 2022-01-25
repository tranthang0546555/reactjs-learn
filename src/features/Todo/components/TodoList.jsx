import React from 'react';
import PropTypes from 'prop-types';
import './index.scss'

function TodoList({ todoList, onClickHandleStatus }) {
    console.log('load_TodoList');
    const handleStatus = (index) => {
        if (!onClickHandleStatus) return;
        else onClickHandleStatus(index)
    }
    return (
        <ul className='todo'>
            {todoList.map((value, index) => (
                <li key={index} className={`todo--${value.status}`} onClick={() => handleStatus(index)}>{value.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;


TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    onClickHandleStatus: PropTypes.func
}

TodoList.defaultProps = {
    todoList: [],
    onClickHandleStatus: null
}