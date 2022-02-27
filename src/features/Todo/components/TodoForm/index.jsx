import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

const schema = yup.object({
    title: yup.string()
        .required("Vui long khong de trong")
        .matches(/^[aA-zZ\s]+$/, "Chi cho phep chu cai ")
        .min(5, "Phai hon 5 ky tu")
})
function TodoForm({ onSubmit }) {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    })

    const handleSubmitForm = (value) => {
        onSubmit(value)
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <h3> TodoForm</h3>

            <InputField name="title" control={control} label="Todo title" disabled={false} errors={errors} />
        </form>
    );
}

export default TodoForm;