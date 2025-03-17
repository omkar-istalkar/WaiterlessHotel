import React from 'react'
import Navbar from '../components/Navbar'
import QrScanner from '../components/QrScanner'

const QrScan = () => {
  return (
    <div className='container fluid text-center'>
        <div>{<Navbar/>}</div>
        <div><QrScanner/></div>
    </div>
  )
}

export default QrScan