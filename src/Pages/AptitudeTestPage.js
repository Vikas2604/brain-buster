import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/AptitudeTestPage.css';
import logicalReasoning from  '../components/assets/LogicalReasoning.jpeg';
import numericalReasoning from '../components/assets/numericaReasoning.avif';
import verbalReasoning from '../components/assets/VerbalReasoning.jpg';
import abstractReasoning from '../components/assets/AbstractReasoning.png';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const AptitudeTestPage = () =>{
    const tests = [
        {
            title:"Numerical Reasoning",
            description:"Test your ability to work with numbers and solve math problems under time pressure.",
            link:'/numerical-reasoning',
            image: numericalReasoning
        },
        {
            title:"Verbal Reasoning",
            description:"Assess your ability to understand and reason using concepts framed in words.",
            link: '/verbal-reasoning',
            image: verbalReasoning
        },
        {
            title:"Logical Reasoning",
            description:"Evaluate your ability to identify patterns and logical connections.",
            link: '/logical-reasoning',
            image: logicalReasoning
        },
        {
            title:"Abstract Reasoning",
            description:"Test your ability to identify patterns, sequences, and logical rules in abstract concepts and shapes.",
            link: '/abstract-reasoning',
            image: abstractReasoning
        }
    ];

    return(

        <>
        
        <NavBar/>

        <div className="aptitude-test-page my-5">
            <h2 className="aptitude-heading mb-4">Aptitute Tests</h2>

            <section className="mb-5">
                <h3 className="aptitude-section-title">What Are Aptitude Tests</h3>
                <p className="aptitude-section-text">Aptitude tests are standardized assessments designed to measure your ability to perform specific tasks, solve problems, and think critically. They assess a range of cognitive abilities, including reasoning, numerical ability, and verbal skills. These tests are widely used by companies, educational institutions, and organizations to evaluate candidates' potential and determine their suitability for a role or program.</p>
            </section>

            <section className="mb-5">
                <h3 className="aptitude-section-title">Why Choose Us</h3>
                <p className="aptitude-section-text">Our website offers a wide range of aptitude tests to help you prepare for competitive exams, job assessments, and university entrance tests. With our user-friendly interface, you can take practice tests across different categories and difficulty levels. We provide personalized feedback, track your progress, and offer tips for improvement, ensuring you perform your best on test day.</p>
            </section>


            <div className="row">
                {tests.map((test,index)=>(
                    <div className="col-md-6 mb-4" key={index}>
                        <div className="aptitude-card card shadow-sm">
                            <div className="aptitude-card card-body">
                                <img src={test.image} alt={test.title} className="card-img-top" style={{ height: "200px", objectFit: "cover" }}/>
                                <h5 className="aptitude-card-title card-title">{test.title}</h5>
                                <p className="aptitude-card-text card-text">{test.description}</p>
                                <Link to={test.link} className="aptitude-btn btn btn-primary btn-block">Take the Test</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <Footer/>
</>

    );
};


export default AptitudeTestPage;