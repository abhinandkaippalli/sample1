import React, { useEffect, useState } from "react";
import './Signup.css';
import validation from "../validation";


function Signup(submitForm) {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);

    return (
        <div className='signup'>
            <div className='app-wrapper'>
                <div>
                    <h2 className='title'>Signup</h2>
                </div>
                <form className='form-wrapper'>
                    <div className='name'>
                        <label className='label1'>First Name</label>
                        <input className='input' type='text' name='first_name' value={values.first_name} onChange={handleChange} />
                        {errors.first_name && <p className="error">{errors.first_name}</p>}
                    </div>
                    <div className='name'>
                        <label className='label1'>Last Name</label>
                        <input className='input' type='text' name='last_name' value={values.last_name} onChange={handleChange} />
                        {errors.last_name && <p className="error">{errors.last_name}</p>}
                    </div>
                    <div className='email'>
                        <label className='label1'>Email</label>
                        <input className='input' type='text' name='email' value={values.email} onChange={handleChange} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className='password'>
                        <label className='email'>Password</label>
                        <input className='input' type='password' name='password' value={values.password} onChange={handleChange} />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button className='submit' onClick={handleFormSubmit}>Sign Up</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup