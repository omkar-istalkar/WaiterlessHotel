import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const UserForm = () => {

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault()
        const Userdata={
            name : name,
            mobile : mobile,
            add : address
        }
        localStorage.setItem('CustomerData',JSON.stringify(Userdata))
        console.log(Userdata)
        navigate('/menu')
    }    

  return (
    <div className='container fluid '>
        <div>{<Navbar/>}</div>
        <div className='m-2 p-3'>
            <form onSubmit={submitHandler}>
                <div id="TextInput" className="form-text">This information will be used to generate order receipt.</div>
                <div className="mb-3 mt-3">
                    <label for="exampleInputEmail1" className="form-label">Enter your name</label>
                    <input type="text" className="form-control" id="TextInput" aria-describedby="TextInput" value={name} onChange={(e)=>setName(e.target.value)} required/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Mobile Number</label>
                    <input type="Number" className="form-control" id="exampleInputPassword1" value={mobile} onChange={(e)=>setMobile(e.target.value)} required/>
                </div>
                <div className="mb-3 mt-3">
                    <label for="exampleInputEmail1" className="form-label">Enter your address</label>
                    <input type="text" className="form-control" id="TextInput" aria-describedby="TextInput" value={address} onChange={(e)=>setAddress(e.target.value)} required/>
                </div>
                <div className='text-center mt-5'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UserForm