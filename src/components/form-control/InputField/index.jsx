import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    lable: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { control, name, label, disabled, errors } = props

    const hasError = (!!errors[name])

    return (
        <div>
            <Controller
                name={name}
                control={control}

                render={({ field }) => <TextField margin='normal' {...field}
                    error={hasError}
                    helperText={errors[name]?.message}

                    // required
                    disabled={disabled}
                    fullWidth
                    label={label} />}
            />
        </div>
    );
}

export default InputField;