import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false)
    const urlBE = 'http://localhost:3001/api';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(urlBE + '/login', {
                username,
                password,
            });
            if (response.data.user === username) {
                navigate('/')
                localStorage.setItem('jwt', response.data.jwt)

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong - Check credentials',
                })
            }

            Swal.fire({
                icon: 'success',
                title: 'Ok',
                text: 'Login successful!',
                showConfirmButton: false,
                timer: 1000
            })
            setTimeout(() => {
                window.location.reload(false);
            }, 1000);

        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong - Check credentials',
            })
        }
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
