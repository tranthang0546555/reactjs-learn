import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {

};

function PasswordField(props) {
    const { control, name, label, disabled, errors } = props

    const hasError = (!!errors[name])

    const [showPassword, setShowPassword] = useState(false)


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl sx={{ width: '100%' }} variant="outlined" margin="normal">
            <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                render={({ field }) => <OutlinedInput {...field}
                    id={name}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>

                    }
                    label={label}
                    error={hasError}
                    disabled={disabled}
                />}
            />
            {hasError && (
                <FormHelperText error id="accountId-error">
                    {errors[name]?.message}
                </FormHelperText>
            )}
        </FormControl>
    );
}

export default PasswordField;