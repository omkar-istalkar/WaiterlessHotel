import React,{act, useRef,useState} from 'react'
import Navbar from '../components/Navbar'
import AddDish from '../components/AddDish'
import AllDishes from '../components/AllDishes'
import TodayOrder from '../components/TodayOrder'

const HotelHome = () => {

  const [activecomponent, setactivecomponent] = useState(1)
  
  const adddish = useRef(null)
  const alldish = useRef(null)
  const todayorder = useRef(null)

  const showcomponentall =()=>{
    setactivecomponent(1)
    alldish.current.focus()
  }

  const showcomponentadd =()=>{
    setactivecomponent(2)
    adddish.current.focus()
  }

  const showcomponenttoday =()=>{
    setactivecomponent(3)
    todayorder.current.focus()
  }
  

  return (
    <div className='container-fluid m-1'>
        <div className='mt-3 fs-4'><marquee behavior="scroll" direction="left">This is Hotel TAE Dashboard by using which you can manage orders add or delete dishes to menu.</marquee></div>
        <div className='row gap-1 m-1'>
          <div className='col-2 bg-succes btn-group-vertical position-sticky top-0' style={{ height: '40vh', position: 'sticky', top: '0' }}>
            <button ref={adddish} onClick={showcomponentadd} className='text-wrap p-2 mt-4 btn btn-primary'> Add Dish </button>
            <button ref={alldish} onClick={showcomponentall} className='text-wrap m-p-1 btn btn-secondary'>All Dishes</button>
            <button ref={todayorder} onClick={showcomponenttoday} className='text-wrap  p-1 btn btn-success'>Today's Orders</button>
          </div>
          <div className='col-9 bg-warning p-2 m-2 border rounded'>
            <div>{activecomponent === 2 && <AddDish/>}</div>
            <div>{activecomponent === 1 && <AllDishes/>}</div>
            <div>{activecomponent === 3 && <TodayOrder/>}</div>
          </div>
        </div>
    </div>
  )
}

export default HotelHome