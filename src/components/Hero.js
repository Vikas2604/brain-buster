import styles from './css/Hero.module.css'
const Hero = ({ onClick }) => {
    return (
        <>
            <div className={styles.backgroundImage}>
                <div className={styles.textImg}>
                    <h1 className={styles.text}>Test Preperation that <br />makes a difference </h1>
                    <br />
                    <h5 className={styles.para1}>Prepare with us - Pass your test - Get the job<br /><br /> Try One of Your <span className={styles.coloredWord}>FREE </span> aptitude tests</h5><br />
                    <button className={styles.btn} onClick={onClick}>Start Free Test</button>
                </div>
            </div>
        </>
    )
}
export default Hero;