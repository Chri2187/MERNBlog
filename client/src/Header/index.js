import { Link } from 'react-router-dom';

const Header = ({ username }) => {
    return (
        <header>
            <Link to='/' className='logo'>
                MyBlog
            </Link>
            <nav>
                {username && (
                    <>
                        <Link to='/create'>Create New Post</Link>
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
