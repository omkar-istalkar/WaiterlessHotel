import React ,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info p-3">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
            <img className='img-fluid' src="logo.png" alt="" width="70" height="50"/>
            </a>
            <a className="navbar-brand text-light" href="/">Waiterless Hotel</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hotel Administrator
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item text-dark" href="/hotel-login">Login</a></li>
                    <li><a className="dropdown-item text-dark" href="hotel-register">Register</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar