import Layout from './Layout';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [username, setUsername] = useState(null)
    const urlBE = 'http://localhost:3001/api';
    const jwt = localStorage.getItem('jwt')
    useEffect(() => {
        async function getProfile() {
            await axios.post(urlBE + '/profile', {
                'jwt': jwt
            }).then(response => {
                setUsername(response.data.username)
            }).catch(err => {
                console.log({ msg: err });
            })
        }
        getProfile()
    }, [])

    return (
        <Routes>
            <Route path='/' element={<Layout username={username} />}>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Route>
        </Routes>
    );
}

export default App;
