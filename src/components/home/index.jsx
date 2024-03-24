import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


const Home = () => {
    
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const NavigateLogin = () => {
        navigate('/login');
    };

    useEffect(() => {
        if (currentUser == null) return NavigateLogin();
    }, []);

    return (
        <div>
            <div className="container-fluid">
                {currentUser != null ? (
                <div className='text-lg font-bold px-10' style={{ textAlign: 'center', color: '#ffffff', backgroundColor: '#000000', paddingTop: '10px', paddingBottom: '10px' }}>
                    Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, Welcome to our sanctuary of mental well-being. Here, we embrace every facet of your journey with empathy and support. Together, let's navigate the path to inner peace and resilience. You're not alone – let's embark on this journey together.
                </div>            
                ) : (
                    <div className='text-lg font-bold px-4 py-14' onClick={NavigateLogin}>
                        Unauthorized Login
                    </div>
                )}
            </div>
            <div>
                <div className="container-fluid" style={{ backgroundColor: '#f5f3f0' }}>
                    <Container maxWidth="lg" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                        <Grid container style={{paddingBottom: '20px'}}>
                            <Grid item xs={12} md={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' , paddingLeft: '15px'}}>
                                <Typography style={{ color: '#000000', fontSize: '55px', paddingBottom: '20px' , fontFamily: 'serif' , lineHeight: '1.2'}}>
                                    There's No One Face to Mental Health Conditions
                                </Typography>
                                <Typography style={{ color: '#616161', fontSize: '19px', paddingBottom: '20px' , lineHeight: '1.2'}}>
                                    At Mental care there's no one-size-fits-all approch to mental health. We tailor our care plans to fit each person's unique needs.
                                </Typography>
                                <Link to="/support">
                                    <Button variant="contained" color="success" style={{ width: '200px' }}>
                                        Quick Support
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item xs={12} md={7} style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
                                <img src="/Images/Services/hex1.png" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'cover' }} alt="podcast image" />
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <div>
                    <Container maxWidth="lg">
                        <Typography style={{ color: '#000000', fontSize: '35px', paddingBottom: '20px' , paddingTop: '20px' , fontFamily: 'serif' , lineHeight: '1.2'}}>
                            We help people living with a variety of mental health conditions
                        </Typography>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <a href="https://www.npr.org/podcasts/510307/invisibilia" target="_blank" rel="noopener noreferrer">
                                    <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img" 
                                                height="140"
                                                image="/Images/Home/ser1.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent style={{textAlign: 'center' }}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Anxiety
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{paddingBottom: '10px'}}>
                                                    Invisibilia delves into unseen forces shaping human behavior and beliefs, intertwining narrative storytelling with enlightening scientific insights, altering perspectives profoundly.
                                                </Typography>
                                                <Button 
                                                    variant="outlined" 
                                                    style={{ color: '#616161', borderColor: '#616161'}}
                                                    sx={{
                                                        '&:hover': {
                                                            color: '#ffffff !important',
                                                            backgroundColor: '#161f36',
                                                            borderColor: '#161f36',
                                                        },
                                                    }}
                                                >
                                                    View Condition
                                                </Button>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </a>
                                <a href="https://www.npr.org/podcasts/510307/invisibilia" target="_blank" rel="noopener noreferrer">
                                    <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img" 
                                                height="140"
                                                image="/Images/Home/ser1.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent style={{textAlign: 'center' }}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Anxiety
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{paddingBottom: '10px'}}>
                                                    Invisibilia delves into unseen forces shaping human behavior and beliefs, intertwining narrative storytelling with enlightening scientific insights, altering perspectives profoundly.
                                                </Typography>
                                                <Button 
                                                    variant="outlined" 
                                                    style={{ color: '#616161', borderColor: '#616161'}}
                                                    sx={{
                                                        '&:hover': {
                                                            color: '#ffffff !important',
                                                            backgroundColor: '#161f36',
                                                            borderColor: '#161f36',
                                                        },
                                                    }}
                                                >
                                                    View Condition
                                                </Button>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </a>
                                <a href="https://www.npr.org/podcasts/510307/invisibilia" target="_blank" rel="noopener noreferrer">
                                    <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img" 
                                                height="140"
                                                image="/Images/Home/ser1.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent style={{textAlign: 'center' }}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Anxiety
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{paddingBottom: '10px'}}>
                                                    Invisibilia delves into unseen forces shaping human behavior and beliefs, intertwining narrative storytelling with enlightening scientific insights, altering perspectives profoundly.
                                                </Typography>
                                                <Button 
                                                    variant="outlined" 
                                                    style={{ color: '#616161', borderColor: '#616161'}}
                                                    sx={{
                                                        '&:hover': {
                                                            color: '#ffffff !important',
                                                            backgroundColor: '#161f36',
                                                            borderColor: '#161f36',
                                                        },
                                                    }}
                                                >
                                                    View Condition
                                                </Button>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </a>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Home;
