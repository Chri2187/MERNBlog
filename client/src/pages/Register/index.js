import { useState } from 'react';
import axios from 'axios';
const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const urlBE = 'http://localhost:3001/api';
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username);

        const response = await axios.post(urlBE + '/register', {
            username,
            password,
        });
        console.log(response);
    };
    return (
        <form className='register' onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input
                type='text'
                placeholder='username'
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />
            <input
                type='password'
                placeholder='password'
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button>Register</button>
        </form>
    );
};

export default Register;
