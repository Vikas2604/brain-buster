import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import styles from './Hero.module.css';
import { Link } from 'react-router-dom';
import image from '../../assets/images/young-woman-working-laptop-isolated-white-background.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const features = [
    {
        id: 1,
        title: "Extensive Question Bank",
        description: "Access a diverse range of aptitude questions across different categories and difficulty levels",
        icon: "fas fa-database",
    },
    {
        id: 2,
        title: "Mock Test and Simulations",
        description: "Practice with realistic mock tests and time-based simulations to improve your performance.",
        icon: "fas fa-vials",
    },
    {
        id: 3,
        title: "Expert-Curated Content",
        description: "Learn from questions and tests crafted by industry experts to ensure quality and relevance.",
        icon: "fas fa-user-tie",
    },
    {
        id: 4,
        title: "Flexible Accessibility",
        description: "Practice anytime, anywhere, on any device with a fully responsive interface.",
        icon: "fas fa-mobile-alt",
    },
];

const Home = ({ onClick }) => {
    return (
        <>
            <NavBar />
            <div className={styles.backgroundImage}>
                <div className={styles.textImg}>
                    <h1 className={styles.text}>Test Preparation that <br />makes a difference </h1>
                    <br />
                    <h5 className={styles.para1}>Prepare with us - Pass your test - Get the job<br /><br /> Try One of Your <span className={styles.coloredWord}>FREE </span> aptitude tests</h5><br />
                    <Link to={'/questions'}>  <button className={styles.btn} onClick={onClick}>Start Free Test</button></Link>
                </div>
            </div>
            <div className={styles.Page2Body}>
                <h1 className="atpHeading">Aptitude Test Preparation</h1>
                <h4>for Pre-employment Assessments</h4>
                <p>Unlock Your Potential: Ace your employee aptitude test or school entrance exam effortlessly with our tailored online practice tests.</p>
                <p>Practice with one of our free aptitude tests, or take your preparation to the next level with our comprehensive test preparation packages. Sign up now and start your preparation today.</p>
                <h5>Want to try a free aptitude test? Try our free Cognitive Ability Test.</h5>
                <div className={styles.buttonLink}>
                    <Link className={styles.testButton} to='./Test'>Free Cognitive Ability Test </Link>
                </div>
            </div>
            <section className="why-choose-us py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Why Choose Us</h2>
                    <div className="row">
                        {features.map((feature) => (
                            <div key={feature.id} className="col-md-6 mb-4">
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body text-center">
                                        <i className={`${feature.icon} fa-3x mb-3`}></i>
                                        <h5 className="card-title">{feature.title}</h5>
                                        <p className="card-text">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className={styles.potentialCont}>
                <div className={styles.potentialContent}>
                    <h1>Unlock Your Potential</h1>
                    <p>Elevate your skills and excel in your pre-employment aptitude test with our test preparation platform.</p>
                    <div className={styles.potentialButton}>
                        <button className={`${styles.potentialButton} ${styles.primary}`}>Get Started</button>
                        <button className={`${styles.potentialButton} ${styles.secondary}`}>Free Aptitude Test</button>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img src={image} alt="Happy woman using laptop" className={styles.responsiveImage} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
