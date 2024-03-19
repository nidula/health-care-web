import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Services = () => {
    
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const NavigateLogin = () => {
        navigate('/login');
    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000', // Change border color based on theme mode
    }));

    useEffect(() => {
        if (currentUser == null) return NavigateLogin();
    }, []);

        return (
            <div className="container-fluid" style={{ backgroundColor: '#f5f3f0' }}>
                <Container maxWidth="lg">
                    <div>
                        <Typography variant="h1" style={{ color: '#454545', fontSize: '35px', fontFamily: 'Serif', paddingTop: '30px' , paddingBottom: '30px' }}>
                            Nurturing Mental Well-Being Together
                        </Typography>
                    </div>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid container style={{paddingBottom: '20px'}}>
                                <Grid item xs={12} md={7} style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
                                    <img src="/Images/Services/hex2.png" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'cover' }} alt="podcast image" />
                                </Grid>
                                <Grid item xs={12} md={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' , paddingLeft: '15px'}}>
                                    <Typography variant="h1" style={{ color: '#d2c5bc', fontFamily: 'serif' , fontSize: '55px', paddingTop: '20px', paddingBottom: '20px' }}>
                                        01
                                    </Typography>
                                    <Typography style={{ color: '#a27b51', fontSize: '20px', fontWeight: 'bold', paddingBottom: '20px' }}>
                                        Discover Your Mental Health Status: Online Screening Tools
                                    </Typography>
                                    <div style={{ border: '2px solid #d2c5bc', padding: '10px' }}>
                                        <Typography style={{ color: '#454545', fontSize: '15px' }}>
                                            Explore our comprehensive online platform offering accessible mental health screening tools designed to help you gain insight into your current mental well-being. 
                                            Our user-friendly quizzes cover a range of common mental health disorders. Take the first step towards understanding and addressing your 
                                            mental health with our convenient and confidential online assessments.                                        
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container style={{paddingBottom: '20px'}}>
                                <Grid item xs={12} md={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' , paddingLeft: '15px'}}>
                                    <Typography variant="h1" style={{ color: '#d2c5bc', fontSize: '55px', fontFamily: 'serif' , paddingTop: '20px', paddingBottom: '20px' }}>
                                        02
                                    </Typography>
                                    <Typography style={{ color: '#a27b51', fontSize: '20px', fontWeight: 'bold', paddingBottom: '20px' }}>
                                        Holistic Mental Wellness Hub: Resources for Mind, Body, and Soul
                                    </Typography>
                                    <div style={{ border: '2px solid #d2c5bc', padding: '10px' }}>
                                        <Typography style={{ color: '#454545', fontSize: '15px' }}>
                                            Discover a treasure trove of resources aimed at nurturing your mental health and promoting overall well-being. From enlightening podcasts to 
                                            insightful books and rejuvenating relaxation and meditation apps, our curated collection empowers you to embark on a journey of 
                                            self-discovery and inner peace. Explore, learn, and prioritize your mental wellness with our comprehensive selection of tools and guidance.                                        
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={7} style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
                                    <img src="/Images/Services/hex1.png" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'cover' }} alt="podcast image" />
                                </Grid>
                            </Grid>
                            <Grid container style={{paddingBottom: '20px'}}>
                                <Grid item xs={12} md={7} style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
                                    <img src="/Images/Services/hex3.png" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'cover' }} alt="podcast image" />
                                </Grid>
                                <Grid item xs={12} md={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' , paddingLeft: '15px'}}>
                                    <Typography variant="h1" style={{ color: '#d2c5bc', fontFamily: 'serif' , fontSize: '55px', paddingTop: '20px', paddingBottom: '20px' }}>
                                        03
                                    </Typography>
                                    <Typography style={{ color: '#a27b51', fontSize: '20px', fontWeight: 'bold', paddingBottom: '20px' }}>
                                        Discover Your Mental Health Status: Online Screening Tools
                                    </Typography>
                                    <div style={{ border: '2px solid #d2c5bc', padding: '10px' }}>
                                        <Typography style={{ color: '#454545', fontSize: '15px' }}>
                                            Explore a comprehensive online platform designed to support individuals in Canada navigating mental health concerns. Our website 
                                            offers a wealth of resources, access to information on nearby therapists, crisis hotlines, and support groups. Stay informed about 
                                            upcoming webinars and events focused on mental health awareness and coping strategies. Whether you're seeking immediate assistance 
                                            or simply looking to enhance your mental well-being, our platform serves as a valuable guide on your journey to better mental health.                                        
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
            </Container>
            </div>
        );
    };
    
    export default Services;