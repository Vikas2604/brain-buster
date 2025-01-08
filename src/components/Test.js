import styles from './css/Test.module.css'
import { Link } from 'react-router-dom';
export const Test = () => {
    return (
        <div className={styles.testPage}>
            <h1>Cognitive Ability Test</h1>
            <h3>Introduction</h3>
            <div className='aboutSection'>
                <p className={styles.subHeading}>About:</p>
                <p>This is a simulated cognitive ability test designed to measure your overall cognitive skills. It can help you assess your readiness for your upcoming aptitude test.
                </p>
                <p>The test comprises five sub-tests with a total of 50 questions and takes approximately 20-30 minutes to complete. There will be a short break between each sub-test.
                </p>
            </div>
            <p>The five sub-tests are:</p>
            <div className={styles.questionType}>
                <ol style={{ listStyleType: 'decimal' }}>
                    <li>Easy (10 questions)</li>
                    <li>Medium (10 questions)</li>
                    <li>Hard (10 questions)</li>
                    <li>Higher Order Thinking (10 questions)</li>
                </ol>
            </div>
            <p className={styles.subHeading}>Instructions:</p>
            <p>The time limits for each test vary but are fairly demanding, so make sure to work quickly yet accurately.</p>
            <p>You can skip questions and return to them later. Use the navigation bar to track unanswered questions and revisit them at any time.</p>
            <p className={styles.subHeading}>Note:</p>
            <p>After completing the test, you will need to answer a few questions about yourself before accessing your results and reviewing the test questions. The information we collect is used solely for anonymous research purposes</p>
            <p>When you are ready, click "Begin" to start the first sub-test.</p>
            <div className={styles.buttonLink}>
                <Link className={styles.beginButton} to='*'>Begin </Link>
            </div >
        </div>
    )
};

export default Test;