import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Radio, RadioGroup, FormControl, FormControlLabel, Grid } from '@mui/material';
import { jsQuizz } from './questions';

const Check = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const NavigateLogin = () => {
        navigate('/login');
    };

    useEffect(() => {
        if (currentUser == null) NavigateLogin();
    }, [currentUser]);

    const totalQuestions = jsQuizz.questions.length; // Calculate total number of questions

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(new Array(totalQuestions).fill(''));
    const [submitClicked, setSubmitClicked] = useState(false);

    const handleNext = () => {
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
    };

    const handlePrev = () => {
        setCurrentQuestion(prevQuestion => prevQuestion - 1);
    };

    const handleAnswerChange = (e) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestion] = e.target.value;
        setUserAnswers(updatedAnswers);
    };

    const calculateScore = () => {
        let score = 0;
        userAnswers.forEach((answer, index) => {
            const selectedChoiceIndex = jsQuizz.questions[index].choices.findIndex(choice => choice === answer);
            if (selectedChoiceIndex !== -1) {
                // Increment the score based on the position of the selected answer in choices array
                score += selectedChoiceIndex + 1;
            }
        });
        return score;
    };
    

    const getScoreCategory = (score) => {
        let category = "";
        let image = "";
    
        if (score < 3) {
            category = "Bad";
            image = "/Images/Check/image1.png"; // Image for score < 3
        } else if (score <= 8) {
            category = "Middle";
            image = "/Images/Check/image2.png"; // Image for score <= 8
        } else {
            category = "Good";
            image = "/Images/Check/image3.png"; // Image for score > 8
        }
    
        return { category, image };
    };

    const handleSubmit = () => {
        const score = calculateScore();
        const scoreCategory = getScoreCategory(score);
        console.log("User Answers:", userAnswers);
        console.log("Score:", score);
        console.log("Score Category:", scoreCategory);
        setSubmitClicked(true);
    };

    return (
        <div className="container-fluid" style={{ background: 'linear-gradient(to top right, #eaeceb 0%, #f9efed 100%)'}}>
            <Container maxWidth="lg" style={{paddingLeft: '0px', paddingBottom:'30px'}}>
                <Grid container>
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
                        <img src="/Images/Check/bac.png" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'cover' }} alt="podcast image" />
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' , paddingLeft: '45px'}}>
                        <Typography variant="h4" align="center" gutterBottom style={{color: '#000000', fontSize: '50px', fontFamily: 'serif' , paddingTop:'30px'}}>
                            Check Your Mental Status
                        </Typography> 
                        {currentQuestion < totalQuestions ? (
                            <Grid container spacing={2}>
                                <Grid item xs={12} textAlign="center">
                                    <Typography variant="h6" gutterBottom style={{fontSize:'30px', fontFamily: 'serif'}}>
                                        Question {currentQuestion + 1} / {totalQuestions}:
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography variant="body1" gutterBottom style={{fontSize:'25px', fontFamily: 'serif'}}>
                                        {jsQuizz.questions[currentQuestion].question}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} style={{ justifyContent: 'center' }}>
                                    <FormControl component="fieldset">
                                        <RadioGroup value={userAnswers[currentQuestion]} onChange={handleAnswerChange}>
                                            {jsQuizz.questions[currentQuestion].choices.map((choice, index) => (
                                                <FormControlLabel
                                                    key={index}
                                                    value={choice}
                                                    control={<Radio />}
                                                    label={choice}
                                                    style={{
                                                        fontSize: '16px',
                                                        fontFamily: 'Arial, sans-serif',
                                                        // Additional styles can be added here
                                                    }}
                                                />
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" onClick={handleNext} style={{fontSize:'15px'}}>
                                        Next
                                    </Button>
                                    {currentQuestion > 0 && (
                                        <Button variant="contained" color="secondary" onClick={handlePrev} style={{ marginLeft: '8px' }}>
                                            Previous
                                        </Button>
                                    )}
                                </Grid>
                            </Grid>
                        ) : (
                            <>
                                <Typography variant="h5" align="center" gutterBottom>
                                    Quiz Completed
                                </Typography>
                                <Button variant="contained" color="primary" onClick={handleSubmit} disabled={submitClicked}>
                                    Submit
                                </Button>
                                {submitClicked && (
                                    <>
                                        <Typography variant="h6" align="center" gutterBottom>
                                            Your Mental Health Condition is {getScoreCategory(calculateScore()).category}
                                        </Typography>
                                        <div>
                                            <img src={getScoreCategory(calculateScore()).image} alt="Mental Health Condition Image" />
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );    
};

export default Check;
