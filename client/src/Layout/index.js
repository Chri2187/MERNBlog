import { Outlet } from 'react-router-dom'
import Header from '../Header'
import { useEffect } from 'react'
import axios from 'axios'
const Layout = ({ username }) => {

    return (
        <main>
            <Header username={username} />
            <Outlet />
        </main>
    )
}

export default Layout