import React from 'react';
import LoginForm from './components/LoginForm';
import { loginUser } from '../../features/Auth/components/userSlide'
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

Login.propTypes = {

};

function Login({ onCloseDialog }) {
    const dispatch = useDispatch()

    const handleSubmit = async (values) => {
        const action = loginUser(values)

        try {
            const resultAction = await dispatch(action)
            const data = unwrapResult(resultAction)
            console.dir(data)

            onCloseDialog()
        } catch (error) {
            console.log("Login error: ", error)
        }
    }

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;