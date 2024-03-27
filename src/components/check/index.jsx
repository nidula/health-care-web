import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Radio, RadioGroup, FormControl, FormControlLabel } from '@mui/material';
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

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(new Array(jsQuizz.questions.length).fill(''));

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

    const handleSubmit = () => {
        // You can implement logic to calculate score or submit answers to backend here
        console.log("User Answers:", userAnswers);
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
                Quiz
            </Typography>
            {currentQuestion < jsQuizz.questions.length ? (
                <>
                    <Typography variant="h6" gutterBottom>
                        Question {currentQuestion + 1}:
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {jsQuizz.questions[currentQuestion].question}
                    </Typography>
                    <FormControl component="fieldset">
                        <RadioGroup value={userAnswers[currentQuestion]} onChange={handleAnswerChange}>
                            {jsQuizz.questions[currentQuestion].choices.map((choice, index) => (
                                <FormControlLabel
                                    key={index}
                                    value={choice}
                                    control={<Radio />}
                                    label={choice}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <Button variant="contained" color="primary" onClick={handleNext}>
                        Next
                    </Button>
                    {currentQuestion > 0 && (
                        <Button variant="contained" color="secondary" onClick={handlePrev}>
                            Previous
                        </Button>
                    )}
                </>
            ) : (
                <>
                    <Typography variant="h5" align="center" gutterBottom>
                        Quiz Completed
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </>
            )}
        </Container>
    );
};

export default Check;
