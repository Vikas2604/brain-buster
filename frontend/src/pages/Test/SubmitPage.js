import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Test.module.css';

const SubmitPage = () => {
    const location = useLocation();
    const { selectedAnswers } = location.state || {};

    const correctAnswers = [
        "4",
        "2",
        "3",
    ];

    const calculateScore = () => {
        let score = 0;
        correctAnswers.forEach((correctAnswer, index) => {
            if (selectedAnswers && selectedAnswers[index] === correctAnswer) {
                score++;
            }
        });
        return score;
    };

    const totalQuestions = correctAnswers.length;
    const score = calculateScore();
    const [timeLeft, setTimeLeft] = useState(15);
    const navigate = useNavigate();

    useEffect(() => {
        if (timeLeft === 0) {
            navigate('/test');
        } else {
            const timer = setTimeout(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [timeLeft, navigate]);

    return (
        <div className={styles.testPage}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Submission Complete</h1>
                <p>Thank you for completing the test!</p>
                <p>Your responses have been recorded.</p>
                {/* Show score as totalScore/totalQuestions */}
                <p>Your score: {score}/{totalQuestions}</p> {/* Correct score format */}
                <p>You will be redirected back to the test page in {timeLeft} seconds.</p>
            </div>
        </div>
    );
};

export default SubmitPage;
