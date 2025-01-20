import React from "react";
import Styles from "./ArticleNews.module.css";
import logo from "../../assets/images/logo5.jpg";
import logo1 from "../../assets/images/10tips.jpg";
import logo2 from "../../assets/images/limited time.jpg";
import logo3 from "../../assets/images/logo3.jpg";
import logo4 from "../../assets/images/logo4.jpg";
import logo6 from "../../assets/images/logo6.png";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

export const ArticleNews = () => {
    const articles = [
        {
            img: logo,
            title: "How to Prepare for a Data Entry Test",
            description:
                "While passing the first stage of interviews is considered difficult, it is often harder to complete a data entry test simply because of the increased need to work under pressure. Data entry tests often cause the most experienced workers to make unnecessary errors that aren’t really representative of how they work daily. However, with some simple preparation, you can complete your pre-employment tests with confidence.",
            link: "https://aptitude-test.com/blog/articles/how-to-prepare-for-a-data-entry-test/",
        },
        {
            img: logo1,
            title: "10 Tips to Pass Your Aptitude Test",
            description:
                "Are you interviewing for a new position? Have you been informed that an aptitude test is part of the recruitment process? Here are 10 tips to pass your aptitude test to help you land that next job.",
            link: "https://aptitude-test.com/blog/articles/10-tips-to-pass-your-aptitude-test/",
        },
        {
            img: logo2,
            title: "How to Prepare for an Aptitude Test with Limited Time",
            description:
                "Have you been invited to take an upcoming aptitude test, but you have less time to prepare than you expected? If you’re in this situation, here is a quick guide to help you prepare for your aptitude test in a limited time window.",
            link: "https://aptitude-test.com/blog/articles/how-to-prepare-for-an-aptitude-test-with-limited-time/",
        },
        {
            img: logo3,
            title: "Present State of the U.S. Job Market: Information for Job Seekers",
            description:
                "Whether you are thinking about applying for a new job or have lost your job as a result of the COVID-19 pandemic, it’s a good idea to stay aware of the state of the U.S. job market as you consider your next career move.",
            link: "https://aptitude-test.com/blog/articles/10-major-companies-that-use-aptitude-testing/",
        },
        {
            img: logo4,
            title: "10 Major Companies that use Aptitude Testing",
            description:
                "If you’ve ever dreamed of working for one of the world’s best companies, it would be wise to know that if you want to work for one, you’ll need to sit an aptitude test. Here are ten major companies that use aptitude testing today as part of their recruitment process.",
            link: "https://aptitude-test.com/blog/articles/avoid-these-common-aptitude-test-mistakes/",
        },
        {
            img: logo6,
            title: "Avoid These Common Aptitude Test Mistakes",
            description:
                "Even the most highly competent candidates make common aptitude test mistakes which reduce their overall score and their chances of being offered a prime position.",
            link: "https://aptitude-test.com/blog/articles/present-state-of-the-u-s-job-market-information-for-job-seekers/",
        },
    ];

    return (
        <>
            <NavBar />
            <div className={Styles.center}>
                <button className={Styles.primary}>Open News</button>
            </div>
            <div className={Styles.container}>
                {articles.map((article, index) => (
                    <div className={Styles.card} key={index}>
                        <img
                            src={article.img}
                            alt={article.title}
                            className={Styles.image}
                        />
                        <div className={Styles.info}>
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                            <a href={article.link} target="_blank" rel="noopener noreferrer">
                                <button className={Styles.btn2}>Read More</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default ArticleNews;
