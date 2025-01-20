import styles from './Test.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export const Test = () => {
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(Array(50).fill(null));

    const fetchQuestions = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('http://localhost:5000/api/questions/random');
            setQuestions(response.data);
        } catch (error) {
            console.error('Error fetching questions:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleBeginClick = () => {
        fetchQuestions();
    };

    const handleOptionSelect = (index, option) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = option;
        setSelectedOptions(newSelectedOptions);
    };

    return (
        <div className={styles.testPage}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Cognitive Ability Test</h1>
                <h3 className={styles.pageSubtitle}>Introduction</h3>
                <div className={styles.aboutSection}>
                    <p className={styles.subHeading}>About:</p>
                    <p>This is a simulated cognitive ability test designed to measure your overall cognitive skills. It can help you assess your readiness for your upcoming aptitude test.</p>
                    <p>The test comprises five sub-tests with a total of 50 questions and takes approximately 20-30 minutes to complete. There will be a short break between each sub-test.</p>
                </div>

                <p className={styles.subHeading}>Test Breakdown:</p>
                <div className={styles.questionType}>
                    <ol>
                        <li>Easy (10 questions)</li>
                        <li>Medium (10 questions)</li>
                        <li>Hard (10 questions)</li>
                        <li>Higher Order Thinking (10 questions)</li>
                    </ol>
                </div>

                <p className={styles.subHeading}>Instructions:</p>
                <ul>
                    <li>The time limits for each test vary but are fairly demanding, so make sure to work quickly yet accurately.</li>
                    <li>You can skip questions and return to them later. Use the navigation bar to track unanswered questions and revisit them at any time.</li>
                    <li>After completing the test, you will need to answer a few questions about yourself before accessing your results and reviewing the test questions. The information we collect is used solely for anonymous research purposes.</li>
                </ul>

                <p className={styles.subHeading}>When you are ready, click "Begin" to start the test.</p>

                <div className={styles.buttonLink}>
                    <Link to={'/questions'}>
                        <button className={styles.beginButton} onClick={handleBeginClick}>
                            Begin
                        </button>
                    </Link>
                </div>

                {isLoading ? (
                    <p>Loading questions...</p>
                ) : (
                    questions.length > 0 && (
                        <div>
                            <h3>Questions:</h3>
                            {questions.map((question, index) => (
                                <div key={index}>
                                    <p>Question {index + 1}: {question.questionText}</p>
                                    <ul>
                                        {question.options.map((option, idx) => (
                                            <li key={idx} onClick={() => handleOptionSelect(index, option)} style={{ cursor: 'pointer', backgroundColor: selectedOptions[index] === option ? '#d3d3d3' : 'transparent' }}>
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Test;
