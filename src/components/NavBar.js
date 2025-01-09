import { Link } from "react-router-dom";
import styles from './css/NavBar.module.css';
import logo from './assets/brain-buster-high-resolution-logo-removebg-preview.png';
import { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("")
    const [loggedIn, setLoggedIn] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/api/auth/signin', {
                email:formData.email,
                password: formData.password,
            });
            console.log("Login response:", response.data);
            setMessage('Login successfull');
            alert('Login successful')
            localStorage.setItem('token',response.data.token);
            setLoggedIn(true);
            setOpenPopup(false);
        } catch(error) {
            const errorMsg = error.response?.data?.message || 'Login Failed';
            setMessage(errorMsg);
            alert(errorMsg);
            
        }
    };

    const handleSignUp = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
            console.log("sign up response:", response.data);
            setMessage('signup successfull');
            alert('signup successful');
            setOpenPopup(false);
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'signup failed';
            setMessage(errorMsg);
            alert(errorMsg);
        }
    };

    const handleLogout = () =>{
        localStorage.removeItem('token')
        setLoggedIn(false);
        setShowDropDown(false);
        alert('Logged out successfully');
    }

    return (
        <>
            <div className={styles.navigationBar}>
                <img className={styles.navLogo} src={logo} alt="Logo" width="200px" />
                <ul>
                    <Link to={'/aptitude-test'}><li>Aptitude Tests</li></Link>
                    <Link to={'/PrepAccess'}><li>Prep Access</li></Link>
                    <Link to={'/'}><li>Articles & News</li></Link>
                    <Link to={'/'}><li>Employers</li></Link>
                    <Link to={'/ContactUs'}><li>Contact Us</li></Link>
                </ul>
                {loggedIn?(
                    <div className={styles.profileContainer}>
                        <i
                            className={`bi bi-person-circle ${styles.profileIcon}`}
                            onClick={()=> setShowDropDown((prev)=> !prev)}
                            style={{fontSize:'40px', cursor:'pointer'}}
                        />
                        {showDropDown && (
                            <div className={styles.dropdownmenu}>
                                <button onClick={handleLogout} className={styles.dropdownItem}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ):(
                    <button onClick={() => setOpenPopup(true)}>Sign in</button>
                )}   
            </div>
            {openPopup &&
                <div className={styles.popupOverlay}>
                    <div className={styles.popupContent}>
                        <button className={styles.closeButton} onClick={() => setOpenPopup(false)}>X</button>
                        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
                        <form onSubmit={isSignUp ? handleSignUp : handleLogin} className={styles.form}>
                            {isSignUp && (
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            )}
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="password">Password:</label>
                                <div className={styles.passwordWrapper}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className={styles.togglePassword}
                                        onClick={() => setShowPassword((prev) => !prev)}
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                {isSignUp ? "Sign Up" : "Login"}
                            </button>
                        </form>
                        <p className={styles.toggleText}>
                            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                            <span onClick={() => setIsSignUp((prev) => !prev)}>
                                {isSignUp ? "Login here" : "Sign up here"}
                            </span>
                        </p>
                    </div>
                </div>
            }
        </>
    );
};

export default NavBar;
