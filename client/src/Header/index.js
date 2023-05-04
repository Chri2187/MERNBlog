import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context';

const Header = ({ username }) => {
    const { setUserInfo } = useContext(UserContext)

    const handleLogout = () => {
        localStorage.clear()
        setUserInfo(null)
        window.location.reload(false);
    }
    return (
        <header>
            <Link to='/' className='logo'>
                MyBlog
            </Link>
            <nav>
                {username && (
                    <>
                        <Link to='/create'>Create New Post</Link>
                        <Link onClick={() => { handleLogout() }}>Logout</Link>
                    </>
                )}
                {!username && (
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register '>Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
