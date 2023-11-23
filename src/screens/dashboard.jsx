// import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <nav className='flex gap-4'>
                <Link to="/" className='text-white hover:text-white w-40'>
                    <button>Home</button>
                </Link>
                <Link to="/dashboard" className='text-white hover:text-white w-40'>
                    <button>Dashboard</button>
                </Link>
            </nav>
            <br />
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard