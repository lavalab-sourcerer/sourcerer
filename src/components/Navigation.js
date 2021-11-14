import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { AccountCircle } from '@mui/icons-material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';


const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }} textAlign="left">
            <AppBar position="static">
                <Toolbar>
                    <AutoFixHighIcon sx={{ mr: 2 }} edge="start"/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sourcerer
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        //onClick={}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navigation