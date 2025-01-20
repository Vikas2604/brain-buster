import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Test.module.css';
import { useNavigate } from 'react-router-dom';

const QuestionDisplay = () => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    const fetchQuestions = async () => {
        try {
            const responses = await Promise.all(
                Array.from({ length: 50 }, () =>
                    axios.get('http://localhost:5000/api/questions/random')
                )
            );
            const fetchedQuestions = responses.map((response) => response.data);
            console.log('Fetched Questions:', fetchedQuestions);
            setQuestions(fetchedQuestions);
        } catch (error) {
            console.error('Error fetching questions:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    const handleOptionChange = (e) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [currentIndex]: e.target.value,
        });
    };

    const handleNextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            let calculatedScore = 0;
            questions.forEach((question, index) => {
                if (selectedAnswers[index] === question.correctAnswer) {
                    calculatedScore += 1;
                }
            });
            setScore(calculatedScore);
            console.log('Selected Answers:', selectedAnswers);
            navigate('/submit', { state: { selectedAnswers, score: calculatedScore } });
        }
    };

    return (
        <div className={styles.testPage}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Aptitude Test</h1>
                {isLoading ? (
                    <p>Loading questions...</p>
                ) : (
                    questions.length > 0 && (
                        <div className={styles.questionSection}>
                            <h3 className={styles.questionNumber}>
                                Question {currentIndex + 1} of {questions.length}
                            </h3>
                            <h3 className={styles.questionText}>
                                {questions[currentIndex].question}
                            </h3>
                            <ul>
                                {questions[currentIndex].options.map((option, idx) => (
                                    <li key={idx}>
                                        <input
                                            type="radio"
                                            id={`option-${idx}`}
                                            name={`question-${currentIndex}`}
                                            value={option}
                                            checked={selectedAnswers[currentIndex] === option}
                                            onChange={handleOptionChange}
                                        />
                                        <label htmlFor={`option-${idx}`}>{option}</label>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={styles.actionButton}
                                onClick={handleNextQuestion}
                                disabled={!selectedAnswers[currentIndex]}
                            >
                                {currentIndex < questions.length - 1 ? 'Next' : 'Submit'}
                            </button>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default QuestionDisplay;
