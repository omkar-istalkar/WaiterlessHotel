import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'  // Corrected import

const Start = () => {
  return (
    <div className='container p-3'>
        <div>{<Navbar/>}</div>
        <div className='text-center p-1'>
            <h3 className='mb-3 fs-1'>Welcome to the Future of Dining!</h3>
            <img className='img-fluid m-3' src="banner.png" alt="Banner" /></div>
            <div className='m-3'>
            <p className="lead">At Hotel TAE, we redefine dining experiences. Enjoy delicious meals served directly to your table by our charming toy train. Scan the QR code on your table to browse our extensive menu and place your order effortlessly.</p>
            <div className='text-center'>
                <Link to='/qr-scan' className="btn btn-success text-decoration-none">Get Started</Link>
            </div>
            <hr />
            <p>Experience the joy of contactless dining, where every dish is crafted with love and delivered with precision. No waiters, no hassle – just delightful moments with family and friends!</p>
        </div>
    </div>
  )
}

export default Start
