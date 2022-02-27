import React from 'react';
import { Button, Autocomplete, TextField } from '@mui/material/';

Mui.propTypes = {

};

function Mui(props) {
    return (
        <div>
            <Button variant="contained" >Hello</Button>
            <br />
            <br />
            <Autocomplete
                color='error'
                disablePortal
                id="combo-box-demo"
                options={['1', '2', '3', '4']}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Lua chon de" />}
            />
        </div>
    );
}

export default Mui;