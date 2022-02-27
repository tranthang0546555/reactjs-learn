import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import Filter from './components/Filter';
import Pagination from './components/Pagination';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
function TodoFeature() {

    const [filter, setFilter] = useState({
        "_page": 1,
        "_limit": 10,
    })

    const [pagination, setPagination] = useState({
        "_page": 1,
        "_limit": 10,
        "_totalRows": 50
    })

    const [status, setStatus] = useState([])

    const [show, setShow] = useState('all')

    useEffect(() => {
        const abortController = new AbortController()
        async function fetchPostList() {
            try {
                const query = queryString.stringify(filter)
                const url = `http://js-post-api.herokuapp.com/api/posts?${query}`
                console.log(url);
                const response = await fetch(url, {
                    signal: abortController.signal
                })
                const responseJson = await response.json()
                // console.log({ responseJson });
                const { data, pagination } = responseJson
                console.log({ responseJson });
                const newData = data.map(value => ({ ...value, status: 'new' }))

                setPagination(pagination)
                setStatus(newData)

            } catch (error) {
                console.log(error);
            }
        }
        fetchPostList()

        return () => {
            abortController.abort()
        }
    }, [filter]);



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


    const handleChangePage = (numPage) => {
        const newPagination = { ...pagination, _page: numPage }
        setFilter({
            ...filter,
            _page: numPage,
        })
        setPagination(newPagination)
    }

    const handleSearchForm = (myfilter) => {
        console.log(myfilter);
        setFilter({
            ...filter,
            _page: 1,
            title_like: myfilter.title
        })
    }

    const handleSubmitForm = (value) => {
        console.log("Form value", value)
        const newTodo = {
            id: Math.round(Math.random() * 1000),
            title: value.title,
            status: 'new'
        }
        setStatus([...status, newTodo])
    }

    const filterListTodo = status.filter(value => (show === 'all') ? true : (value.status === show))
    return (
        <>
            <button onClick={handleShowAll}>Show all</button>
            <button onClick={handleShowNew}>Show new</button>
            <button onClick={handleShowOld}>Show old</button>
            <br />
            <br />
            <Filter onFilterForm={handleSearchForm} />
            <br />
            <TodoForm onSubmit={handleSubmitForm} />
            <br />

            <TodoList todoList={filterListTodo} onClickHandleStatus={handleStatusClick} />
            <Pagination pagination={pagination} onChangePage={handleChangePage} />
        </>
    );
}

export default TodoFeature;