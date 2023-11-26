// import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <nav className='flex items-center gap-4 bg-gray-800 fixed top-0 w-screen z-10 p-2 left-0 justify-center'>
                <Link to="/" className='text-white hover:text-white'>
                    <button>Home</button>
                </Link>
                <Link to="/dashboard" className='text-white hover:text-white'>
                    <button>Dashboard</button>
                </Link>
                {/* <Link to="/dashboard" className='text-white hover:text-white'>
        <button>About</button>
        </Link> */}
            </nav>
            <br />
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard