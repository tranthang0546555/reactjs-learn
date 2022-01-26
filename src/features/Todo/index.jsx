import React, { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import TodoList from './components/TodoList';

function TodoFeature() {

    const [pagination, setPagination] =
        useState({
            "_page": 1,
            "_limit": 10,
            "_totalRows": 50
        })

    const [status, setStatus] = useState([])

    const [show, setShow] = useState('all')

    useEffect(() => {
        async function fetchPostList() {
            try {
                const url = `http://js-post-api.herokuapp.com/api/posts?_limit=${pagination._limit}&_page=${pagination._page}`
                const response = await fetch(url)
                const responseJson = await response.json()
                // console.log({ responseJson });
                const { data } = responseJson
                const newData = data.map(value => ({ ...value, status: 'new' }))
                setStatus(newData)
            } catch (error) {
                console.log(error);
            }
        }
        fetchPostList()
    }, [pagination]);


    const handleStatusClick = (id) => {
        setStatus(pre => {
            const newStatus = []
            pre.map(value => (
                newStatus.push({
                    ...value,
                    status: (value.id === id) ? ((value.status === 'new') ? 'old' : 'new') : value.status
                })
            ))
            // console.log(newStatus)
            return newStatus
        })
    }


    const handleShowAll = () => {
        setShow('all')
    }

    const handleShowNew = () => {
        setShow('new')
    }

    const handleShowOld = () => {
        setShow('old')
    }

    const filterListTodo = status.filter(value => (show === 'all') ? true : (value.status === show))



    const handleChangePage = (numPage) => {
        const newPagination = { ...pagination, _page: numPage }
        setPagination(newPagination)
    }

    return (
        <>

            <button onClick={handleShowAll}>Show all</button>
            <button onClick={handleShowNew}>Show new</button>
            <button onClick={handleShowOld}>Show old</button>
            <TodoList todoList={filterListTodo} onClickHandleStatus={handleStatusClick} />
            <Pagination pagination={pagination} onChangePage={handleChangePage} />
        </>
    );
}

export default TodoFeature;