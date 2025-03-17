import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Start from './pages/Start'
import QrScan from './pages/QrScan'
import HotelLogin from './pages/HotelLogin'
import HotelRegister from './pages/HotelRegister'
import UserForm from './pages/UserForm'
import Menu from './pages/Menu'
import HotelHome from './pages/HotelHome'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Start/>}/>
      <Route path='/qr-scan' element={<QrScan/>}/>
      <Route path='/hotel-login' element={<HotelLogin/>}/>
      <Route path='/hotel-register' element={<HotelRegister/>}/>
      <Route path='/user-form' element={<UserForm/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/hotel-home' element={<HotelHome/>}/>
    </Routes>
  )
}

export default App