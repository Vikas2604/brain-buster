import NavBar from '../components/NavBar';
import styles from '../components/css/ContactUs.module.css'
import image from '../components/assets/rb_5456.png'
import { useState } from 'react';
import Footer from '../components/Footer';

export const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.subject) newErrors.subject = "Subject is required";
        if (!formData.message) newErrors.message = "Message is required";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted:", formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <>
            <NavBar />
            <div className={styles.contactHead}>
                <h1 className={styles.head}>Contact us</h1>
                <hr />
                <p className={styles.head}><i>We're here to help!</i></p>
            </div>
            <div className={styles.formAndImage}>
                <img className={styles.contactQuestions} src={image} alt='Questions?' />
                <div className={styles.formContainer}>
                    <h2>Contact Us</h2>
                    <p className={styles.introText}>
                        You are very welcome to contact us with any questions or comments you may have.
                        Please use the form below. We are committed to answering your questions as swiftly as possible.
                        In most cases, you can expect a response within 24 hours, often even sooner.
                    </p>
                    {submitted && <p className={styles.successMessage}>Form submitted successfully!</p>}
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={errors.name && styles.errorField}
                            />
                            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={errors.email && styles.errorField}
                            />
                            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Subject:</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className={errors.subject && styles.errorField}
                            />
                            {errors.subject && <p className={styles.errorText}>{errors.subject}</p>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="5"
                                className={errors.message && styles.errorField}
                            ></textarea>
                            {errors.message && <p className={styles.errorText}>{errors.message}</p>}
                        </div>
                        <button type="submit" className={styles.submitButton}>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs;