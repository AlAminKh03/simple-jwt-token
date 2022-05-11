import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    const handleLogin = (event) => {

        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)


        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {

                    localStorage.setItem('accessToken', data.accessToken)
                    navigate('/order')
                }
                console.log(data)
            }
            )
    }
    return (
        <div className="w-25 container mx-auto ">
            <h2>Please-login</h2>
            <form onSubmit={handleLogin}>
                <input className="me-3" type="email" name="email" id="" placeholder='email' required /> <br />
                <input className="me-3" type="password" name="password" id="" placeholder='password' required /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;