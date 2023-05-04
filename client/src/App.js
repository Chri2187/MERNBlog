import Layout from './Layout';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext, UserContextProvider } from './Context';
import Create from './pages/Create';

function App() {
    const [username, setUsername] = useState(null)
    const { setUserInfo } = useContext(UserContext)
    const urlBE = 'http://localhost:3001/api';
    const jwt = localStorage.getItem('jwt')
    useEffect(() => {
        async function getProfile() {
            await axios.post(urlBE + '/profile', {
                'jwt': jwt
            }).then(response => {
                console.log(response.data);
                setUsername(response.data.username)
                setUserInfo(response.data)
            }).catch(err => {
                console.log({ msg: err });
            })
        }
        getProfile()
    }, [])

    return (
        <UserContextProvider>
            <Routes>
                <Route path='/' element={<Layout username={username} />}>
                    <Route index element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create' element={<Create />} />
                </Route>
            </Routes>
        </UserContextProvider>
    );
}

export default App;
