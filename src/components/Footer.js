import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/Footer.css';

const Footer = () =>{
    return(
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-6 mb-4">
                        <h5 className="fw-bold">Contact Us</h5>
                        <p className="mb-1">Email: support@brainbusters.com</p>
                        <p className="mb-1">
                            Phone: +917039558173
                        </p>
                        <p>Address: No. 2757/2760 & 2759, 1st Floor, Kodigehalli Ward No.8, Sahakar Nagar, Bangalore - 560092 </p>
                    </div>

                    <div className="col-6 mb-4">
                        <div className="d-flex flex-column align-items-center">
                        <h5 className="fw-bold mb-3">Follow Us</h5>
                        <div className="d-flex justify-content-center gap-3">
                            <a href="#" className="text-white">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>

                            <a href="#" className="text-white">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>

                            <a href="#" className="text-white">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>

                            <a href="#" className="text-white">
                                <i className="fab fa-linkedin fa-lg"></i>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="mb-0">
                        &copy; {new Date().getFullYear()} BrainBusters | All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;