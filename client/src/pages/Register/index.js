import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const urlBE = 'http://localhost:3001/api';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(urlBE + '/register', {
                username,
                password,
            });
            console.log(response.data);
            Swal.fire({
                icon: 'success',
                title: 'Ok',
                text: 'Registration successful!'
            })
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User Already Exists',
            })
        }

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
