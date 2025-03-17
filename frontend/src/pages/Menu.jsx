import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import UserDish from '../components/UserDish'
import axios from 'axios'
 
const Menu = () => {
  var tab = localStorage.getItem('Table No')
  if (!tab){
    tab = 0
  }
  const name = JSON.parse(localStorage.getItem('CustomerData'))
  const c_name = name?name.name:'Guest'

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get-dishes');
        setDishes(response.data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

    fetchDishes();
  }, []);

  return (
    <div className='container p-2'>
      <div>{<Navbar/>}</div>
      <div className='d-flex justify-content-evenly bg-success text-light p-3'>
        <div><h4>Welcome {c_name}</h4></div>
        <div><h4>You are on Table No. {tab}</h4></div>
      </div>

      <div className='row p-2'>
        <div className='col-10'> 
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <div className='col-2'>
          <select class="form-select" aria-label="Default select example">
            <option value="cat">Veg</option>
            <option value="cat">Non-veg</option>
          </select>
        </div>
      </div>
      <div className='row p-2 justify-content-center align-items-center'>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{width:'75%'}}>
          <div className="carousel-inner">
            <div className
            ="carousel-item active" data-bs-interval="10000">
              <img src='https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg' className="d-block w-100" height='400px' alt="..."/>
              <h3>Dal Fry</h3>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg" className="d-block w-100" height='400px' alt="..."/>
              <h3>Baingan Bharta</h3>
            </div>
            <div className="carousel-item">
              <img src="https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg" className="d-block w-100" height='400px' alt="..."/>
              <h3>Matar Paneer</h3>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container p-3 m-1">
        {dishes.map((dish) => (
          <div key={dish._id} className="col-4">
            <UserDish 
              name={dish.name}
              price={dish.price}
              image={`data:image/png;base64,${dish.image}`}  
              dishId={dish._id}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu