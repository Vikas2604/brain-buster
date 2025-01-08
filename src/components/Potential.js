import React from 'react';
import styles from './css/Potential.module.css'
function Potential() {
    return (
        <div className={styles.unlockContainer}>
            <h1>Unlock Your Potential</h1>
            <p>
                Discover the limitless possibilities within you. Take the first step toward greatness.
            </p>
            <button onClick={() => alert('Start Your Journey!')}>Start Now </button>
        </div>
    );
}

export default Potential;