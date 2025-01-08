import styles from './css/Page2.module.css';
import { Link } from 'react-router-dom';

export const Page2 = () => {
    return (
        <div className={styles.Page2Body}>
            <h1 className='atpHeading'>Aptitude Test Preparation</h1>
            <h4>for Pre-employment Assessments</h4>
            <p>Unlock Your Potential: Ace your employee aptitude test or school entrance exam effortlessly with our tailored online practice tests.
            </p>
            <p>Practice with one of our free aptitude tests, or take your preparation to the next level with our comprehensive test preparation packages. Sign up now and start your preparation today.</p>
            <h5>Want to try a free aptitude test? Try our free Cognitive Ability Test.</h5>
            <div className={styles.buttonLink}>
                <Link className={styles.testButton} to='./Test'>Free Cognitive Ability Test </Link>
            </div >

        </div>)
}

export default Page2;