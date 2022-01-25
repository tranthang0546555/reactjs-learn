import React, { useState } from 'react';
import TodoList from './components/TodoList';

function TodoFeature() {

    const initTodos = [
        {
            id: 1,
            title: "Todo1",
            status: 'new'
        },
        {
            id: 2,
            title: "Todo2",
            status: 'old'
        },
        {
            id: 3,
            title: "Todo3",
            status: 'old'
        }
    ]

    const [status, setStatus] = useState(initTodos)

    const handleStatusClick = (index) => {
        setStatus(pre => {
            const newStatus = [...pre]
            newStatus[index] = {
                ...pre[index],
                status: (pre[index].status === 'new') ? 'old' : 'new'
            }
            console.log(newStatus)
            return newStatus
        })
    }

    console.log('load_Todo---');

    return (
        <>
            <TodoList todoList={status} onClickHandleStatus={handleStatusClick} />
        </>
    );
}

export default TodoFeature;