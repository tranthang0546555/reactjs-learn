import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../features/Auth/components/userSlide';
import RegisterForm from './components/RegisterForm'
import { useSnackbar } from 'notistack';

function Register({ onCloseDialog }) {

    const disPatch = useDispatch()
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        values.username = values.email
        try {
            const action = registerUser(values)
            const resultAction = await disPatch(action)
            const data = unwrapResult(resultAction)

            console.log("New user: ", data)
            enqueueSnackbar("Register Successfully!", { variant: 'success' })
            if (onCloseDialog) {
                onCloseDialog()
            }
        } catch (error) {
            console.log("Register User Error: ", error)

            enqueueSnackbar("Register Error!", { variant: 'error' })
        }
    }
    return (
        <RegisterForm onSubmit={handleSubmit} />
    );
}

export default Register;