import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HotelRegister = () => {
  const [name, setname] = useState('')
  const [mail, setmail] = useState('')
  const [pass, setpass] = useState('')
  const navigate = useNavigate()

  const submithandler = async (e) => {
    e.preventDefault()

    // Validate input
    if (!name || !mail || !pass) {
      alert('All fields are required')
      return
    }

    const formData = {
      name,
      mail,
      pass
    }

    try {
      const response = await fetch('http://localhost:5000/hotel-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        alert('Hotel registered successfully')
        navigate('/hotel-login')
      } else {
        alert(data.message || 'Error while registration')
      }
    } catch (err) {
      console.error(err)
      alert('Something went wrong, please try again later.')
    }
  }

  return (
    <div className='container p-4'>
      <div className='text-center mt-3 mb-5'><h2>Registration Page</h2></div>
      <div id="emailHelp" className="form-text">This registration page is only for employees of this hotel. So you will need to have access before you register</div>
      <form onSubmit={submithandler}>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter email provided by Hotel' value={mail} onChange={(e) => setmail(e.target.value)} required />
        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="TextInput" className="form-label">Employee Name</label>
          <input type="text" className="form-control" id="TextInput" aria-describedby="emailHelp" placeholder='Enter name of employee' value={name} onChange={(e) => setname(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={pass} onChange={(e) => setpass(e.target.value)} required />
        </div>
        <div>Already Registered? <a className='text-decoration-none' href="/hotel-login">Go to Login page</a></div>
        <div className='text-center mt-5'>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default HotelRegister
