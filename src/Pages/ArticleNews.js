import Styles from '../components/css/Article&News.module.css'
import logo from '../components/assets/logo5.jpg'
import logo1 from '../components/assets/10tips.jpg'
import logo2 from '../components/assets/limited time.jpg'
import logo3 from '../components/assets/logo3.jpg'
import logo4 from '../components/assets/logo4.jpg'
import logo6 from '../components/assets/logo6.png'
import NavBar from '../components/NavBar'

export const ArticleNews = () => {
    return (
        <>
            <NavBar />
            <div className={Styles.center}>
                <button className={Styles.primary}>Open News</button>
            </div>
            <div className={Styles.conTainer}>

                <div className={Styles.imageContainer}>
                    <img src={logo} alt="Description of the image" width="800px" height="400px" className={Styles.image} />

                    <div className={Styles.info}>
                        <h2>How to Prepare for a Data Entry Test</h2>
                        <p className={Styles.para2}>While passing the first stage of interviews is considered difficult, it is often harder to complete a data entry test simply because of the increased need to work under pressure. Data entry tests often cause the most experienced workers to make unnecessary errors that aren’t really representative of how they work daily. However, with some simple preparation, you can complete your pre-employment tests with confidence. Here is how to prepare for your upcoming data entry test.</p>
                    </div>
                    <a href='https://aptitude-test.com/blog/articles/how-to-prepare-for-a-data-entry-test/'><button className={Styles.btn2}>Read more</button></a>

                </div>
                {/* ----------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className={Styles.imageContainer1}>
                    <img src={logo1} alt="Description of the image" width="800px" height="400px" className={Styles.image1} />

                    <div className={Styles.info1}>
                        <h2>10 Tips to Pass Your Aptitude Test
                        </h2>
                        <p className={Styles.para3}>Are you interviewing for a new position? Have you been informed that an aptitude test is part of the recruitment process? Here are 10 tips to pass your aptitude test to help you land that next job.</p>
                    </div>
                    <a href='https://aptitude-test.com/blog/articles/10-tips-to-pass-your-aptitude-test/'><button className={Styles.btn2}>Read More</button></a>

                </div>

            </div>
            {/* ------------------------------------------------------------------------------------------------------------------- */}

            <div className={Styles.Container2}>
                <div className={Styles.ImageContainer2}>
                    <img src={logo2} alt="Description of the image" width="800px" height="400px" className={Styles.image} />

                    <div className={Styles.info2}>
                        <h2>How to Prepare for an Aptitude Test with Limited Time</h2>
                        <p className={Styles.para4}>Have you been invited to take an upcoming aptitude test, but you have less time to prepare than you expected? <br />If you’re in this situation, here is a quick guide to help you prepare for your aptitude test in a limited time window.</p>
                    </div>
                    <a href='https://aptitude-test.com/blog/articles/how-to-prepare-for-an-aptitude-test-with-limited-time/'><button className={Styles.btn2}>Read More</button></a>

                </div>
                {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                <div className={Styles.ImageContainer3}>
                    <img src={logo3} alt="Description of the image" width="800px" height="400px" className={Styles.image} />

                    <div className={Styles.info2}>
                        <h2>Present State of the U.S. Job Market: Information for Job Seekers
                        </h2>
                        <p className={Styles.para4}>Whether you are thinking about applying for a new job or have lost your job as a result of the COVID-19 pandemic, it’s a good idea to<br /> stay aware of the state of the U.S. job market as you consider your next career move.</p>
                    </div>
                    <a href='https://aptitude-test.com/blog/articles/10-major-companies-that-use-aptitude-testing/'><button className={Styles.btn2}>Read More</button></a>

                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------------- */}
            <div className={Styles.Container3}>
                <div className={Styles.ImageContainer4}>
                    <img src={logo4} alt="Description of the image" width="800px" height="400px" className={Styles.image} />

                    <div className={Styles.info2}>
                        <h2>10 Major Companies that use Aptitude Testing</h2>
                        <p className={Styles.para4}>If you’ve ever dreamed of working for one of the world’s best companies, it would be wise to know that if you want to work for one, you’ll need to sit an aptitude test. Aptitude tests help companies select the ideal candidate in the sea of applicants they receive during every recruiting season. Here are ten major companies that use aptitude testing today as part of their recruitment process.</p>
                    </div>
                    <a href='https://aptitude-test.com/blog/articles/avoid-these-common-aptitude-test-mistakes/'><button className={Styles.btn2}>Read More</button></a>

                </div>
                {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                <div className={Styles.ImageContainer5}>
                    <img src={logo6} alt="Description of the image" width="800px" height="400px" className={Styles.image} />

                    <div className={Styles.info2}>
                        <h2>Avoid These Common Aptitude Test Mistakes
                        </h2>
                        <p className={Styles.para4}>Have you ever gone back to look at a test you’ve done in the past, only to realize you lost marks because you selected the wrong answer, when in fact you knew the correct answer all along? If you’ve had this experience, rest assured you are not alone. Even the most highly competent candidates make common aptitude test mistakes which reduce their overall score and their chances of being offered a prime position.</p>
                    </div>
                    <a href='https://aptitude-test.com/blog/articles/present-state-of-the-u-s-job-market-information-for-job-seekers/'><button className={Styles.btn2}>Read More</button></a>

                </div>
            </div>





        </>

    );
}
export default ArticleNews;