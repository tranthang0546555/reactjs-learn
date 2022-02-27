import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../components/form-control/InputField';
import PasswordField from '../../../components/form-control/PasswordField';


const useStyles = makeStyles({
    container: {
        padding: '20px',
        width: '50ch',
        position: 'relative',
    },

    circularLoading: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },
})

const schema = yup.object({
    fullName: yup.string().required("Empty").matches(/^[aA-zZ\s]+$/, "Number?").min(5, "Min 5"),
    email: yup.string().required("Empty").email("Email"),
    password: yup.string().required("Empty").min(8, "Min 8"),
    repassword: yup.string().required("Empty").oneOf([yup.ref('password'), null], 'Password must match')
}).required();

export default function FormDialog({ onSubmit, onCloseDialog }) {

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            repassword: '',
        },
        resolver: yupResolver(schema)
    })
    const style = useStyles()

    const handleSubmit = async (data) => {
        if (onSubmit) {
            await onSubmit(data)
        }
        // form.reset()
    }

    const { isSubmitting } = form.formState;


    return (
        <div className={style.container}>
            <Avatar sx={{ m: 'auto', bgcolor: 'secondary.main' }}>
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
                Sign up
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name='fullName' control={form.control} label="Full Name" errors={form.formState.errors} disabled={false} />
                <InputField name='email' control={form.control} label="Email" errors={form.formState.errors} disabled={false} />
                <PasswordField name='password' control={form.control} label="Password" errors={form.formState.errors} disabled={false} />
                <PasswordField name='repassword' control={form.control} label="Retype Password" errors={form.formState.errors} disabled={false} />

                <Button disabled={isSubmitting} type="submit" variant="contained" fullWidth size="large"> Submit</Button>
                <br />
                <div className={style.circularLoading}>
                    {isSubmitting && <CircularProgress size={30} />}
                </div>

            </form>
        </div >

    );
}
