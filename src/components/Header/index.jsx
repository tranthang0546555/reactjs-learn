import { AccountCircle } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, IconButton, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from '../../auth/Login';
import Register from '../../auth/Register';
import { logout } from '../../features/Auth/components/userSlide';

const useStyles = makeStyles({
    btnLink: {
        textDecoration: 'none',
        color: 'white',
        position: 'relative',
    },
    closeIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
    }
})

const Mode = {
    REGISTER: 'register',
    LOGIN: 'login'
}

function Header(props) {
    const style = useStyles()

    const loginUser = useSelector(state => state.user.current)
    // console.log(loginUser)
    const isLogin = !!loginUser.id

    const dispatch = useDispatch()

    const [stateOpenDialog, setStateOpenDialog] = useState(false);
    const [mode, setMode] = useState(Mode.LOGIN)

    const handleCloseDialog = (event, reason) => {
        setStateOpenDialog(false)
    };

    const handleOpenDialog = (mode) => {
        setMode(mode)
        setStateOpenDialog(true)
    };


    const handleBackdropClick = (event) => {
        event.stopPropagation()
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        const action = logout()
        dispatch(action)
        setAnchorEl(null);
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link className={style.btnLink} to='/'>
                                ThangNe
                            </Link>
                        </Typography>

                        <Link className={style.btnLink} to='clock'>
                            <Button color="inherit">Clock</Button>
                        </Link>



                        <Link className={style.btnLink} to='counter'>
                            <Button color="inherit">Counter</Button>
                        </Link>

                        <Link className={style.btnLink} to='todos'>
                            <Button color="inherit">Todos</Button>
                        </Link>

                        {
                            !isLogin &&
                            <>
                                <Button onClick={() => handleOpenDialog(Mode.REGISTER)} color="inherit">Register</Button>

                                <Button onClick={() => handleOpenDialog(Mode.LOGIN)} color="inherit">Login</Button>
                            </>
                        }

                        {
                            isLogin &&
                            <>
                                <AccountCircle onClick={handleClickMenu} />
                            </>
                        }

                    </Toolbar>
                </AppBar>
            </Box>

            <Dialog open={stateOpenDialog} onBackdropClick={handleBackdropClick}>
                <div className={style.closeIcon}>
                    <IconButton onClick={handleCloseDialog}>
                        <CloseIcon />
                    </IconButton>
                </div>

                {mode === Mode.REGISTER &&
                    <>
                        <Register onCloseDialog={handleCloseDialog} />
                        <Box>
                            <Button onClick={() => handleOpenDialog(Mode.LOGIN)}>Go login account</Button>
                        </Box>
                    </>
                }

                {mode === Mode.LOGIN &&
                    <>
                        <Login onCloseDialog={handleCloseDialog} />
                        <Box>
                            <Button onClick={() => handleOpenDialog(Mode.REGISTER)}>Go register account</Button>
                        </Box>
                    </>
                }
            </Dialog>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>

        </div>
    );
}

export default Header;