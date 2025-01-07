import React from 'react';
import NavBar from './NavBar';
import styles from './css/ContactUs.module.css'

export const ContactUs = () => {
    return (
        <>
            <NavBar />
            <div className={styles.contactHead}>
                <h1 className={styles.head}>Contact us</h1>
                <hr />
                <p className={styles.head}><i>We're here to help!</i></p>
            </div>

            <div className={styles.form}>
                <p>You are very welcome to contact us with any questions or comments you may have. Please use the form below. We are committed to answering your questions as swiftly as possible. In most cases, you can expect a response within 24 hours, often even sooner.</p>

            </div>
        </>
    )
}

export default ContactUs;