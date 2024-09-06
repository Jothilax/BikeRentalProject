import React, { useState } from 'react';
import './signup.css';


function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.username) {
            newErrors.username = 'Username is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Submit form data to an API or handle it as needed
            console.log('Form submitted successfully:', formData);
            document.write("Form submitted successfully");
            // Reset form
            setFormData({
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            setErrors({});
        }
    };

    return (
       

            <div className='signup container-fluid col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xxl-12 '>
                <div className='row'>
                    <div className='container-fluid col-md-2 col-sm-2 col-xs-2 col-lg-2 col-xxl-2 '></div>
                    <div className='container-fluid col-md-8 col-sm-8 col-xs-8 col-lg-8 col-xxl-8'>
                      
                        <form onSubmit={handleSubmit}>
                            <center>
                        <table>
                            <th><h1>SIGN UP</h1></th>
                            <tr><label>Username:</label></tr>
                            <tr><input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange} />
                        {errors.username && <p>{errors.username}</p>}
                    </tr>
                            <tr><label>Email:</label></tr>
                            <tr><input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange} />
                        {errors.email && <p>{errors.email}</p>}</tr>
                            <tr><label>Password:</label></tr>
                            <tr><input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange} />
                        {errors.password && <p>{errors.password}</p>}</tr>
                            <tr><label>Confirm Password:</label></tr>
                            <tr><input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange} />
                        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}</tr>

<tr>
    <td colSpan="2"><center>
    <button type="submit" className='signupbtn'>Sign Up</button></center>
    </td>
</tr>
</table>
</center> 
       </form>
            </div>
        <div className='container-fluid col-md-2 col-sm-2 col-xs-2 col-lg-2 col-xxl-2 '></div>
                </div>
            </div>
          
    );
}

export default Signup;
