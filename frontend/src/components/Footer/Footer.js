import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={`${styles.footer} py-5`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h5 className="fw-bold">Contact Us</h5>
                        <p className="mb-1">Email: <a href="mailto:support@brainbusters.com" className={styles.link}>support@brainbusters.com</a></p>
                        <p className="mb-1">Phone: <a href="tel:+917039558173" className={styles.link}>+91 7039 558 173</a></p>
                        <p>
                            Address: No. 2757/2760 & 2759, 1st Floor, Kodigehalli Ward No.8,
                            Sahakar Nagar, Bangalore - 560092
                        </p>
                    </div>
                    <div className="col-md-6 mb-4 text-center">
                        <h5 className="fw-bold mb-3">Follow Us</h5>
                        <div className="d-flex justify-content-center gap-3">
                            <a href="#" className={styles.icon}>
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="#" className={styles.icon}>
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="#" className={styles.icon}>
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="#" className={styles.icon}>
                                <i className="fab fa-linkedin fa-lg"></i>
                            </a>
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
