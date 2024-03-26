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

    const TypographyWithMark = ({ children }) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px', fontSize: '24px'}}>•</span> {/* Adjust the mark as needed */}
            <Typography style={{ fontSize: '20px', fontFamily: 'serif', color: '#616161' }}>
                {children}
            </Typography>
        </div>
    );

    const handleEmergencyCall = () => {
        window.location.href = 'tel:911';
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
                <div className="container-fluid" style={{ background: 'linear-gradient(to top right, #eaeceb 0%, #f9efed 100%)' }}>
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' , paddingLeft: '15px'}}>
                                <Typography style={{ color: '#000000', fontSize: '62px', paddingBottom: '25px' , fontFamily: 'serif' , lineHeight: '1.2'}}>
                                    There's No One Face to Mental Health Conditions
                                </Typography>
                                <Typography style={{ color: '#616161', fontSize: '19px', paddingBottom: '25px' , lineHeight: '1.2', fontFamily:'serif'}}>
                                    At Mental care there's no one-size-fits-all approch to mental health. We tailor our care plans to fit each person's unique needs.
                                </Typography>
                                <Link to="/support" style={{paddingBottom:'25px'}}>
                                    <Button variant="contained" color="success" style={{ width: '200px' , fontFamily:'serif'}}>
                                        Quick Support
                                    </Button>
                                </Link>
                                <button
                                    onClick={handleEmergencyCall}
                                    style={{width: '200px', backgroundColor: '#CA0707', color: 'white', padding: '8px', borderRadius: '5px', fontSize:'20px', fontStyle:'bold'}}
                                    >
                                    Call 911
                                    </button>
                            </Grid>
                            <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
                                <img src="/Images/Home/man1.png" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'cover' }} alt="podcast image" />
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <div style={{backgroundColor: '#FAFAFA'}}>
                    <Container maxWidth="lg" style={{paddingBottom:'60px'}}>
                        <Typography style={{ color: '#000000', fontSize: '45px', paddingBottom: '20px' , paddingTop: '60px' , fontFamily: 'serif' , lineHeight: '1.2'}}>
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
                                                <Typography gutterBottom variant="h5" component="div" style={{fontFamily: 'serif'}}>
                                                    Anxiety
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{paddingBottom: '10px', fontFamily: 'serif'}}>
                                                    Invisibilia delves into unseen forces shaping human behavior and beliefs, intertwining narrative storytelling with enlightening scientific insights, altering perspectives profoundly.
                                                </Typography>
                                                <Button 
                                                    variant="outlined" 
                                                    style={{ color: '#616161', borderColor: '#616161', fontFamily: 'serif'}}
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
                                                <Typography gutterBottom variant="h5" component="div" style={{fontFamily: 'serif'}}>
                                                    Depression
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{paddingBottom: '10px', fontFamily: 'serif'}}>
                                                    Invisibilia delves into unseen forces shaping human behavior and beliefs, intertwining narrative storytelling with enlightening scientific insights, altering perspectives profoundly.
                                                </Typography>
                                                <Button 
                                                    variant="outlined" 
                                                    style={{ color: '#616161', borderColor: '#616161', fontFamily: 'serif', fontFamily: 'serif'}}
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
                                                <Typography gutterBottom variant="h5" component="div" style={{fontFamily: 'serif'}}>
                                                    Distress
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{paddingBottom: '10px', fontFamily: 'serif'}}>
                                                    Invisibilia delves into unseen forces shaping human behavior and beliefs, intertwining narrative storytelling with enlightening scientific insights, altering perspectives profoundly.
                                                </Typography>
                                                <Button 
                                                    variant="outlined" 
                                                    style={{ color: '#616161', borderColor: '#616161', fontFamily: 'serif'}}
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
                <div className="container-fluid" style={{ background: 'linear-gradient(to top right, #eaeceb 0%, #f9efed 100%)'}}>
                    <Container maxWidth="lg" style={{paddingLeft: '0px'}}>
                        <Grid container>
                            <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
                                <img src="/Images/Home/doc1.png" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'cover' }} alt="podcast image" />
                            </Grid>
                            <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' , paddingLeft: '15px'}}>
                                <Typography style={{ color: '#000000', fontSize: '45px', paddingBottom: '30px' , fontFamily: 'serif' , lineHeight: '1.2'}}>
                                    How to get back to natural life after treated mental health Medicare?
                                </Typography>
                                <Typography style={{ color: '#616161', fontSize: '20px', paddingBottom: '30px' , lineHeight: '1.2', fontFamily:'serif'}}>
                                    Medicare patient care is paramount - the driving force in everything we do. LifeStance is committed to state of the art clinical  excellence. 
                                </Typography>
                                <div style={{ display: 'flex', flexDirection: 'row' , paddingBottom:'30px'}}>
                                    <div style={{ flex: 1 }}>
                                        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                            <li>
                                                <TypographyWithMark style={{fontSize:'20px', fontFamily:'serif', color: '#616161'}}>
                                                    Highly Trained Clinicians
                                                </TypographyWithMark>
                                                <TypographyWithMark style={{fontSize:'20px', fontFamily:'serif', color: '#616161'}}>
                                                    States we serve
                                                </TypographyWithMark>
                                                <TypographyWithMark style={{fontSize:'20px', fontFamily:'serif', color: '#616161'}}>
                                                    Highly Trained Clinicians
                                                </TypographyWithMark>
                                                <TypographyWithMark style={{fontSize:'20px', fontFamily:'serif', color: '#616161'}}>
                                                    Highly Trained Clinicians
                                                </TypographyWithMark>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <TypographyWithMark style={{fontSize:'20px', fontFamily:'serif', color: '#616161'}}>
                                                    Highly Trained Clinicians
                                                </TypographyWithMark>
                                                <TypographyWithMark style={{fontSize:'20px', fontFamily:'serif', color: '#616161'}}>
                                                    Highly Trained Clinicians
                                                </TypographyWithMark>
                                                <TypographyWithMark style={{fontSize:'20px', fontFamily:'serif', color: '#616161'}}>
                                                    Highly Trained Clinicians
                                                </TypographyWithMark>
                                                <TypographyWithMark style={{fontSize:'20px', fontFamily:'serif', color: '#616161'}}>
                                                    Highly Trained Clinicians
                                                </TypographyWithMark>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="https://www.npr.org/podcasts/510307/invisibilia" target="_blank" rel="noopener noreferrer">
                                    <Button 
                                        variant="outlined" 
                                        style={{ color: '#616161', borderColor: '#616161', fontFamily: 'serif'}}
                                        sx={{
                                            '&:hover': {
                                                color: '#ffffff !important',
                                                backgroundColor: '#161f36',
                                                borderColor: '#161f36',
                                            },
                                        }}
                                    >
                                        Quick Support
                                    </Button>
                                </a>                   
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <div className="container-fluid" style={{ background: '#ffffff', paddingBottom: '40px', paddingTop:'60px'}}>
                    <Container maxWidth="lg" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <Grid container style={{ paddingBottom: '20px' }}>
                            <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '15px' }}>
                                <Typography style={{ color: '#000000', fontSize: '45px', paddingBottom: '20px', fontFamily: 'serif', lineHeight: '1.2' }}>
                                    We provide mental health services when and where you need it.
                                </Typography>
                                <Typography style={{ color: '#616161', fontSize: '20px', paddingBottom: '20px', lineHeight: '1.2' , fontFamily:'serif'}}>
                                    Mindcare promotes a healthy and active lifestyle - no fanatical weight loss or perfect body ideals. Our goal is to tech patient to create happiness within.
                                </Typography>
                                <div style={{ display: 'flex', flexDirection: 'row' , paddingBottom:'12px'}}>
                                    <div style={{ flex: 1 }}>
                                        <Typography style={{fontSize:'45px', fontFamily:'serif'}}>
                                            31
                                        </Typography> 
                                        <Typography style={{fontSize:'20px', fontFamily:'serif', color: '#616161', paddingBottom:'12px'}}>
                                            States we serve
                                        </Typography>
                                        <hr style={{ width: '80%', margin: 0, marginBottom: 10, border: 'none', borderBottom: '1px solid #d3d3d3'}} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <Typography style={{fontSize:'45px', fontFamily:'serif'}}>
                                            4100
                                        </Typography>
                                        <Typography style={{fontSize:'20px', fontFamily:'serif', color: '#616161', paddingBottom: '12px'}}>
                                            Highly Trained Clinicians
                                        </Typography>
                                        <hr style={{ width: '80%', margin: 0, marginBottom: 10, border: 'none', borderBottom: '1px solid #d3d3d3'}} />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Typography style={{fontSize:'45px', fontFamily:'serif'}}>
                                            31
                                        </Typography> 
                                        <Typography style={{fontSize:'20px', fontFamily:'serif', color: '#616161', paddingBottom:'12px'}}>
                                            Approximate Centers
                                        </Typography>
                                        <hr style={{ width: '40%', margin: 0, marginBottom: 10, border: 'none', borderBottom: '1px solid #d3d3d3'}} />
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
                                <img src="/Images/Home/help.webp" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'cover' }} alt="podcast image" />
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <div style={{backgroundColor: '#FAFAFA'}}>
                    <Container maxWidth="xl" style={{paddingBottom:'60px'}}>
                        <Container maxWidth="md" style={{paddingBottom:'60px'}}>
                            <Typography style={{ color: '#000000', fontSize: '50px', paddingTop: '50px' , fontFamily: 'serif' , lineHeight: '1.2', textAlign: 'center'}}>
                                Love from patients who treated by Mindcare's best service
                            </Typography>
                        </Container>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , width: '100%'}}>
                                <Card sx={{ maxWidth: 345, margin: '10px' , flex: '1 1 auto'}}>
                                    <CardActionArea>
                                        <div style={{ position: 'relative' }}>
                                            <img
                                                src="/Images/Home/ser1.jpg"
                                                alt="green iguana"
                                                style={{
                                                    width: 80,
                                                    height: 80,
                                                    borderRadius: '50%',
                                                    position: 'absolute',
                                                    top: 10,
                                                    left: 10,
                                                }}
                                            />
                                            <CardContent style={{ paddingTop: 100 }}>
                                                <Typography variant="h6" gutterBottom style={{fontFamily: 'serif', paddingBottom:'10px', paddingTop:'10px'}}>
                                                    Nidula Chithwara
                                                </Typography>
                                                <hr style={{ width: '100%', margin: 'auto', marginBottom: 10 }} />
                                                <Typography variant="body2" color="text.secondary" style={{fontFamily: 'serif', fontSize:'20px', paddingBottom:'20px', paddingTop:'10px'}}>
                                                    Comment content goes here. Invisibilia delves into unseen forces shaping human behavior and beliefs, intertwining narrative storytelling with enlightening scientific insights, altering perspectives profoundly.
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{ marginTop: 10 , fontFamily: 'serif' }}>
                                                    Date Posted
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345, margin: '10px' , flex: '1 1 auto'}}>
                                    <CardActionArea>
                                        <div style={{ position: 'relative' }}>
                                            <img
                                                src="/Images/Home/ser1.jpg"
                                                alt="green iguana"
                                                style={{
                                                    width: 80,
                                                    height: 80,
                                                    borderRadius: '50%',
                                                    position: 'absolute',
                                                    top: 10,
                                                    left: 10,
                                                }}
                                            />
                                            <CardContent style={{ paddingTop: 100 }}>
                                                <Typography variant="h6" gutterBottom style={{fontFamily: 'serif', paddingBottom:'10px', paddingTop:'10px'}}>
                                                    User Name
                                                </Typography>
                                                <hr style={{ width: '100%', margin: 'auto', marginBottom: 10 }} />
                                                <Typography variant="body2" color="text.secondary" style={{fontFamily: 'serif', fontSize:'20px', paddingBottom:'20px', paddingTop:'10px'}}>
                                                    Comment content goes here. Invisibilia delves into unseen forces shaping human behavior and beliefs, intertwining narrative storytelling with enlightening scientific insights, altering perspectives profoundly.
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{ marginTop: 10 , fontFamily: 'serif'}}>
                                                    Date Posted
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345, margin: '10px' , flex: '1 1 auto'}}>
                                    <CardActionArea>
                                        <div style={{ position: 'relative' }}>
                                            <img
                                                src="/Images/Home/ser1.jpg"
                                                alt="green iguana"
                                                style={{
                                                    width: 80,
                                                    height: 80,
                                                    borderRadius: '50%',
                                                    position: 'absolute',
                                                    top: 10,
                                                    left: 10,
                                                }}
                                            />
                                            <CardContent style={{ paddingTop: 100 }}>
                                                <Typography variant="h6" gutterBottom style={{fontFamily: 'serif', paddingBottom:'10px', paddingTop:'10px'}}>
                                                    User Name
                                                </Typography>
                                                <hr style={{ width: '100%', margin: 'auto', marginBottom: 10 }} />
                                                <Typography variant="body2" color="text.secondary" style={{fontFamily: 'serif', fontSize:'20px', paddingBottom:'20px', paddingTop:'10px'}}>
                                                    Comment content goes here. Invisibilia delves into unseen forces shaping human behavior and beliefs, intertwining narrative storytelling with enlightening scientific insights, altering perspectives profoundly.
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{ marginTop: 10 , fontFamily: 'serif'}}>
                                                    Date Posted
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345, margin: '10px' , flex: '1 1 auto'}}>
                                    <CardActionArea>
                                        <div style={{ position: 'relative' }}>
                                            <img
                                                src="/Images/Home/ser1.jpg"
                                                alt="green iguana"
                                                style={{
                                                    width: 80,
                                                    height: 80,
                                                    borderRadius: '50%',
                                                    position: 'absolute',
                                                    top: 10,
                                                    left: 10,
                                                }}
                                            />
                                            <CardContent style={{ paddingTop: 100 }}>
                                                <Typography variant="h6" gutterBottom style={{fontFamily: 'serif', paddingBottom:'10px', paddingTop:'10px'}}>
                                                    User Name
                                                </Typography>
                                                <hr style={{ width: '100%', margin: 'auto', marginBottom: 10 }} />
                                                <Typography variant="body2" color="text.secondary" style={{fontFamily: 'serif', fontSize:'20px', paddingBottom:'20px', paddingTop:'10px'}}>
                                                    Comment content goes here. Invisibilia delves into unseen forces shaping human behavior and beliefs, intertwining narrative storytelling with enlightening scientific insights, altering perspectives profoundly.
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{ marginTop: 10 , fontFamily: 'serif'}}>
                                                    Date Posted
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </CardActionArea>
                                </Card>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Home;
