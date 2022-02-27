import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { makeStyles } from '@mui/styles';
import InputField from '../../../components/form-control/InputField'
import PasswordField from '../../../components/form-control/PasswordField'
import { Button } from '@mui/material';

const schema = yup.object({
    identifier: yup.string().required("Empty?").email("Email_@"),
    password: yup.string().required("Empty?").min(8, "Min 8"),
})

const useStyles = makeStyles({
    container: {
        minWidth: '400px',
        padding: '20px',
    },

    h3: {
        textAlign: 'center',

    },

    input: {
        width: 'auto',
    }
})

function LoginForm({ onSubmit }) {
    const styles = useStyles()

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema)
    })
    const { register, formState: { errors } } = form

    const handleSubmit = values => {
        onSubmit(values)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <h3 className={styles.h3}>Login</h3>
                {/* <label>Email: </label><input {...register("identifier")} className={styles.input} />
                <p>{errors.identifier?.message}</p>

                <lable>Password: </lable><input {...register("password")} className={styles.input} />
                <p>{errors.password?.message}</p>

                <input type='submit' /> */}

                <InputField name='identifier' control={form.control} label="Email" errors={errors} disabled={false} />
                <PasswordField name='password' control={form.control} label="Password" errors={errors} />

                <Button type="submit" variant="contained" fullWidth size="large"> Submit</Button>
            </form>
        </div>

    );
}

export default LoginForm;