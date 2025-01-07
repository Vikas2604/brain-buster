import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/WhyChooseUs.css';


const features = [
    {
        id : 1,
        title : "Extensive Question Bank",
        description : "Access a diverse range of aptitude questions across different categories and difficulty levels",
        icon: "fas fa-database",
    },
    {
        id : 2,
        title : "Mock Test and Simulations",
        description : "Practice with realistic mock tests and time-based simulations to improve your performance.",
        icon: "fas fa-vials",
    },
    {
        id : 3,
        title : "Expert-Curated Content",
        description : "Learn from questions and tests crafted by industry experts to ensure quality and relevance.",
        icon: "fas fa-user-tie",
    },
    {
        id : 4,
        title : "Flexible Accessibility",
        description : "Practice anytime, anywhere, on any device with a fully responsive interface.",
        icon: "fas fa-mobile-alt",
    },
];


const WhyChooseUs = () =>{
    return(
        <section className="why-choose-us py-5">
            <div className="container">
                <h2 className="text-center mb-4">Why Choose Us</h2>
                <div className="row">
                    {features.map((feature)=>(
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
    );
};

export default WhyChooseUs;