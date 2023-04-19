import Header from './Header';
import Post from './Post';
import { Routes } from 'react-router-dom';

function App() {
    return (
        <main>
            <Header />
            <Post />
            <Post />
            <Post />
        </main>
    );
}

export default App;
