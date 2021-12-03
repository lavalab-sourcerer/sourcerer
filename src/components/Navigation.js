import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Avatar } from '@mui/material';
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Box sx={{position: "sticky", top: 0, zIndex: 1, flexGrow: 1, borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }} textAlign="left">
            <AppBar position="static" variant="flat" sx={{ backgroundColor: 'white', color: 'black' }}>
                <Toolbar>
                    <Link to="/" style={{ textDecoration: 'none', display: 'block', marginRight: 'auto' }}>
                        <img src={logo} height="20px" alt="logo" />
                    </Link>
                    <Typography>
                        Heath Chancey
                    </Typography>
                    <Avatar sx={{ width: 32, height: 32, ml: 1 }} alt="Heath Chancey" src="https://media-exp1.licdn.com/dms/image/C4E03AQFFmVgL522q8A/profile-displayphoto-shrink_800_800/0/1634865265743?e=1643846400&v=beta&t=iqSF-vWAGN6l9RyVwgRPkHYxQByOpdpz0Be9E6Gyc3M" />

                    {/* <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        //onClick={}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton> */}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navigation