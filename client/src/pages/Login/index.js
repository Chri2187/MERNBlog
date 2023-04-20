import { useState } from 'react';
import axios from 'axios';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const urlBE = 'http://localhost:3001/api';
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post(urlBE + '/login', {
            username,
            password,
        });
        console.log(response.data);
    };
    return (
        <form className='login' onSubmit={handleSubmit}>
            <h1>Login</h1>
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
            <button>Login</button>
        </form>
    );
};

export default Login;
