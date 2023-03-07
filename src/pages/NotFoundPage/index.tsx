import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
    return (
        <div className=' h-screen flex items-center justify-center'>
            <div>
                <h1 className='text-white text-2xl '>404 Page Not Found</h1>
                <div className='text-center'>
                    <Link to="/" className='text-blue-900'>Go Back Home</Link>
                </div>
            </div>
        </div>
    )
}
export default NotFoundPage;