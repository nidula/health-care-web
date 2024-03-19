import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';

const Publications = () => {
    
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const NavigateLogin = () => {
        navigate('/login');
    };

    useEffect(() => {
        if (currentUser == null) return NavigateLogin();
    }, []);

    return (
        <div className="container-fluid">
            <div style={{ position: 'relative', textAlign: 'center', height: '400px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/Images/Publications/bac.jpg" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', color: 'white', fontSize: '55px'}}>
                    Recommended Resources
                </div>
            </div>
            <div className="container-fluid" style={{ backgroundColor: '#f5f3f0' }}>
                <Container maxWidth="lg">
                    <div>
                        <h1 style={{ color: '#454545', fontSize: '40px', fontFamily: 'Serif' , paddingTop: '20px'}}>
                            Podcasts to inspire
                        </h1>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href="https://www.npr.org/podcasts/510307/invisibilia" target="_blank" rel="noopener noreferrer">
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img" 
                                        height="140"
                                        image="/Images/Publications/po1.webp"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Invisibilia
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Invisibilia delves into unseen forces shaping human behavior and beliefs, intertwining narrative storytelling with enlightening scientific insights, altering perspectives profoundly.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                        <a href="https://www.tenpercent.com/podcast" target="_blank" rel="noopener noreferrer">
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Images/Publications/po2.webp"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            10% Happier
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Dan hosts a show featuring meditation experts, scientists, and celebrities like the Dalai Lama and Brené Brown, exploring topics like enlightenment and psychedelics.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                        <a href="https://bedtime.fm/peaceout" target="_blank" rel="noopener noreferrer">
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Images/Publications/po3.jpeg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Peace Out
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Biweekly calming tales by Chanel Tsang guide children in mindfulness. Rob Griffiths produces. Perfect for teaching relaxation and self-regulation.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                        <a href="https://podcasts.apple.com/us/podcast/modern-love/id1065559535?mt=2" target="_blank" rel="noopener noreferrer">
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Images/Publications/po4.webp"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Modern Love
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            "Modern Love: NYT's 20-year column spawns TV show, books, and podcast. Host Anna Martin explores love's complexities, with new episodes every Wednesday."
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                        <a href="https://podcasts.apple.com/us/podcast/oprahs-super-soul/id1264843400" target="_blank" rel="noopener noreferrer">
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Images/Publications/po5.webp"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Oprah's Super Soul
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Experience enlightenment through Oprah's Super Soul. Delve into insightful interviews with thought leaders, authors, and wellness experts, igniting personal growth and connection.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                        <a href="https://podcasts.apple.com/us/podcast/tara-brach/id265264862" target="_blank" rel="noopener noreferrer">
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Images/Publications/po6.webp"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Tara Brach
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Tara Brach, Ph.D., renowned for Radical Acceptance and True Refuge, offers weekly meditations blending Western psychology and Eastern spirituality for healing and awakening.                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                    </div>
                </Container>

                <Container maxWidth="lg">
                    <div>
                        <h1 style={{ color: '#454545', fontSize: '40px', fontFamily: 'Serif' , paddingTop: '20px'}}>
                            Medication Apps
                        </h1>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href="https://www.headspace.com/headspace-meditation-app" target="_blank" rel="noopener noreferrer">
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img" 
                                        height="140"
                                        image="/Images/Publications/app1.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Headspace
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                        <a href="https://www.calm.com/" target="_blank" rel="noopener noreferrer">
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Images/Publications/app2.png"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Calm
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                        <a href="https://hminnovations.org/meditation-app" target="_blank" rel="noopener noreferrer">
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Images/Publications/app3.png"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Healthy Minds
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                    </div>
                </Container>

                <Container maxWidth="lg">
                    <div>
                        <h1 style={{ color: '#454545', fontSize: '40px', fontFamily: 'Serif' , paddingTop: '20px'}}>
                            Books to bring out your best
                        </h1>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href="https://www.amazon.ca/dp/1989025560?ascsubtag=7373920|nef288f97d60e4e9f9b94560b1c80ac7516|1989025560&linkCode=gs2&tag=dotdashca-20" target="_blank" rel="noopener noreferrer">
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img" 
                                        height="140"
                                        image="/Images/Publications/book1.webp"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            This Is Depression
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Best Overall
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                        <a href="https://www.amazon.ca/dp/B08FRSQHFP?ascsubtag=7373920|nef288f97d60e4e9f9b94560b1c80ac7516|B08FRSQHFP&linkCode=gs2&tag=dotdashca-20" target="_blank" rel="noopener noreferrer">
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Images/Publications/book2.webp"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Feeling Great
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Best for Negative Thoughts                                        
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                        <a href="https://www.amazon.ca/dp/168403468X?ascsubtag=7373920|nef288f97d60e4e9f9b94560b1c80ac7516|168403468X&linkCode=gs2&tag=dotdashca-20" target="_blank" rel="noopener noreferrer">
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Images/Publications/book3.webp"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Learned Hopefulness
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Best Positive Psychology-Based
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                        <a href="https://www.amazon.ca/dp/1936636158?ascsubtag=7373920|nef288f97d60e4e9f9b94560b1c80ac7516|1936636158&linkCode=gs2&tag=dotdashca-20" target="_blank" rel="noopener noreferrer">
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Images/Publications/book4.webp"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Unlearning Anxiety & Depression
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Best for Anxiety                                        
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                        <a href="https://www.amazon.ca/dp/1733117504?ascsubtag=7373920|nef288f97d60e4e9f9b94560b1c80ac7516|1733117504&linkCode=gs2&tag=dotdashca-20" target="_blank" rel="noopener noreferrer">
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Images/Publications/book5.webp"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Your Happiness Toolkit
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Best for Recovery                                        
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                        <a href="https://www.amazon.ca/dp/1540900932?ascsubtag=7373920|nef288f97d60e4e9f9b94560b1c80ac7516|1540900932&linkCode=gs2&tag=dotdashca-20" target="_blank" rel="noopener noreferrer">
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/Images/Publications/book6.webp"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            101 Ways to Be Less Stressed
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Best for Stress Management
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Publications;
