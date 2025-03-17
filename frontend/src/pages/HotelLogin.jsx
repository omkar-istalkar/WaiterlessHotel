import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HotelLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    // Input validation
    if (!email || !password) {
      setErrorMessage('Please fill in both email and password fields')
      return
    }

    const credentials = {
      email,
      password
    }

    try {
      const response = await fetch('http://localhost:5000/hotel-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })

      const data = await response.json()

      if (response.ok) {
        // Assuming the server returns a token on successful login
        localStorage.setItem('authToken', data.token)
        alert('Login successful')
        navigate('/hotel-home') // Navigate to a different page after login
      } else {
        setErrorMessage(data.message || 'Error logging in')
      }
    } catch (err) {
      console.error(err)
      setErrorMessage('Something went wrong, please try again later.')
    }
  }

  return (
    <div className='container p-5'>
      <form onSubmit={submitHandler}>
        <div className='mb-5 text-center mt-5'>
          <h3>Login Page</h3>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && (
          <div className="text-danger text-center mb-3">{errorMessage}</div>
        )}
        <div className='text-center mt-5'>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default HotelLogin
