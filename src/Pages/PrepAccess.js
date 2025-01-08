import styles from '../components/css/PrepAccess.module.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import questions from '../components/assets/PrepAccess (1).png'
import details from '../components/assets/PrepAccess (2).png'
import chart from '../components/assets/PrepAccess (3).png'
import solution from '../components/assets/PrepAccess (5).png'

const features = [
    {
        icon: '📚',
        title: '500+ practice questions',
        description: 'Access a collection of high-quality test questions, thoughtfully developed by experts and consistently enhanced through user feedback, for a superior preparation experience.',
    },
    {
        icon: '❓',
        title: 'Detailed Solution Explanations',
        description: 'Every test question comes with a thoroughly explained solution, providing clear understanding and insight.',
    },
    {
        icon: '📊',
        title: 'Test Statistics',
        description: 'Receive detailed statistics and charts tracking your test practice progress, offering a clear view of your improvement over time.',
    },
    {
        icon: '⏱️',
        title: 'Test Simulations',
        description: 'Set up simulations to replicate the specific test scenario you will encounter.',
    },
];



export const PrepAccess = () => {

    return (
        <div>
            <NavBar />
            <div className={styles.pageWrapper}>
                <div className={styles.aptHero}>
                    <h1 className={styles.atpHead}>Aptitude Test Preparation</h1>
                </div>
                <div className={styles.boxContainer}>
                    <h4>Pass your test and get your dream job</h4>
                    <h5>Optimize your test preparation with access to your personal Test Prep Account.</h5>
                </div>
                <div className={styles.prepPlat}>
                    <h2>Test Prep Platform</h2>
                    <h6 className={styles.slogan}>Full Access</h6>
                    <p className={styles.slogan}>Preparation can be the difference between passing and failing your test. Prepare with us and pass your test!</p>
                    <div className={styles.featuresSection}>
                        {features.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <div className={styles.featureIcon}>{feature.icon}</div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDescription}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <h2>About the Platform</h2>
                <div className={styles.featureHighlight}>
                    <div className={styles.featureRow}>
                        <div className={styles.featureImage}>
                            <img
                                src={questions}
                                alt="Practice Questions Example"
                            />
                        </div>
                        <div className={styles.featureText}>
                            <h2 className={styles.featureTitle}>High-quality Test Questions</h2>
                            <p>
                                Practice using our large database of more than 3,000 high-quality test
                                questions. All our test questions resemble those of real aptitude tests.
                            </p>
                            <p>
                                Study in practice mode with instant feedback on each answer, or simulate
                                real test conditions with our timed tests.
                            </p>
                        </div>
                    </div>
                    <div className={styles.featureRow}>
                        <div className={styles.featureText}>
                            <h2 className={styles.featureTitle}>Solutions Explained in Detail</h2>
                            <p>
                                Frustrated with just knowing your answer is wrong without understanding
                                the reason?
                            </p>
                            <p>
                                Our solutions offer clear and detailed explanations, so you’ll not only
                                grasp why an answer was incorrect but also greatly improve your chances
                                of getting similar questions right in your next attempt.
                            </p>
                        </div>
                        <div className={styles.featureImage}>
                            <img
                                src={details}
                                alt="Detailed Solutions Example"
                            />
                        </div>
                    </div>
                    <div className={styles.featureRow}>
                        <div className={styles.featureImage}>
                            <img
                                src={chart}
                                alt="Practice Questions Example"
                            />
                        </div>
                        <div className={styles.featureText}>
                            <h2 className={styles.featureTitle}>Score Data and Progression Charts</h2>
                            <p>
                                Your test results are securely stored and readily accessible, presented in an intuitive and user-friendly format. Utilize this data to verify improvements in your test performance, identify your areas of strength and weakness, or simply explore it for enjoyment.


                            </p>
                        </div>
                    </div>
                    <div className={styles.featureRow}>
                        <div className={styles.featureText}>
                            <h2 className={styles.featureTitle}>Compare Your Performance</h2>
                            <p>
                                After completing a test, you can compare your results with those of previous test-takers. This eliminates the need to guess about your performance.
                                <p>From the statistics of previous test-takers, you can see:</p>

                                <ul>
                                    <li>The average score for the specific test you took.</li>
                                    <li>The average number of correct answers for each question.</li>
                                    <li>The answers others provided for each specific question.</li>
                                    <li>The amount of time others spent answering each specific question.</li>
                                    <li>The number of test-takers who skipped each specific question.</li>
                                </ul>
                            </p>
                        </div>
                        <div className={styles.featureImage}>
                            <img className={''} src={solution} alt='Detailed Solutions Example' />
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.icon}>👍</div>
                        <h2>Satisfaction Guaranteed</h2>
                        <p>
                            If you are not fully satisfied with our test preparation materials, or
                            it turns out that you do not need them after all, receive a full refund
                            within 30 days of purchase. Read more about our Money Back Guarantee.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>🎧</div>
                        <Link to="/ContactUs" className={styles.link}>
                            <h2>Questions?</h2>
                            <p>
                                Do you have any questions that you would like answered before you buy
                                access to the platform? Contact us today, and we will respond as quickly
                                as we can. Press here to go to our contact page.
                            </p>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div >
        </div>
    )
}

export default PrepAccess;