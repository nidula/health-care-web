import React, { useState } from 'react';
import {AppBar,Toolbar,Button,Typography,Box,IconButton,Drawer,List,ListItem,ListItemText,Divider,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleLogout = () => {
        doSignOut().then(() => {
            navigate('/login');
        });
    };

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setDrawerOpen(open);
    };

    const list = () => (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}onKeyDown={toggleDrawer(false)}>
            <List>
                <ListItem component={RouterLink} to="/">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem component={RouterLink} to="/services">
                    <ListItemText primary="Our Services" />
                </ListItem>
                <ListItem component={RouterLink} to="/check">
                    <ListItemText primary="Check your Mental Status" />
                </ListItem>
                <ListItem component={RouterLink} to="/publications">
                    <ListItemText primary="For You" />
                </ListItem>
                <ListItem component={RouterLink} to="/support">
                    <ListItemText primary="Quick Support" />
                </ListItem>
                <Divider />
                <ListItem onClick={handleLogout}>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <React.Fragment>
            <AppBar position="static" color="default">
                <Toolbar style={{backgroundColor: '#ffffff'}}>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', fontWeight: 'bold' } }}>
                        Mental Health Project
                    </Typography>
                    {userLoggedIn ? (
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button component={RouterLink} to="/" color="inherit"
                                sx={{
                                        '&:hover': {
                                            backgroundColor: '#161f36', // Change background color on hover
                                            color: 'white', // Change text color on hover
                                        },
                                    }}
                            >
                                Home
                            </Button>
                            <Button
                                component={RouterLink}
                                to="/services"
                                color="inherit"
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#161f36', // Change background color on hover
                                        color: 'white', // Change text color on hover
                                    },
                                }}
                            >
                                Our Services
                            </Button>
                            <Button
                                component={RouterLink} to="/check" color="inherit"
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#161f36', // Change background color on hover
                                        color: 'white', // Change text color on hover
                                    },
                                }}
                            >
                                Check your Mental Status
                            </Button>
                            <Button component={RouterLink} to="/publications" color="inherit"
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#161f36', // Change background color on hover
                                        color: 'white', // Change text color on hover
                                    },
                                }}
                            >
                                For You
                            </Button>
                            <Button
                                component={RouterLink}
                                to="/support"
                                color="inherit"
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#161f36', // Change background color on hover
                                        color: 'white', // Change text color on hover
                                    },
                                }}
                            >
                                Quick Support
                            </Button>
                            <Button onClick={handleLogout} color="inherit"
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#161f36', // Change background color on hover
                                        color: 'white', // Change text color on hover
                                    },
                                }}
                            >
                                Logout
                            </Button>
                        </Box>
                    ) : (
                        <Box>
                            <Button component={RouterLink} to="/login" color="inherit"
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#161f36', // Change background color on hover
                                        color: 'white', // Change text color on hover
                                    },
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                component={RouterLink}
                                to="/register"
                                color="inherit"
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#161f36', // Change background color on hover
                                        color: 'white', // Change text color on hover
                                    },
                                }}
                            >
                                Register New Account
                            </Button>
                        </Box>
                    )}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        {userLoggedIn && (
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </React.Fragment>
    );
};

export default Header;
