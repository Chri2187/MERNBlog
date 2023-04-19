
const Post = () => {
    return (
        <div className='post'>
            <div className='image'>
                <img
                    src='https://images.unsplash.com/photo-1681846291878-1103198eb2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    alt=''
                />
            </div>
            <div className='texts'>
                <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className='info'>
                    <a className='author'>Author test</a>
                    <time>2023-01-01 16:45</time>
                </p>
                <p className='summary'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    commodi, hic nam esse quod rem maxime voluptates
                    explicabo, asperiores voluptas nihil soluta optio labore
                    debitis nesciunt.
                </p>
            </div>
        </div>
    )
}

export default Post 