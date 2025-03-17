import React from 'react';
import { Link } from 'react-router-dom';

const UserDish = ({ name, price, image, dishId }) => {
  return (
    <div className='container p-3 m-1'>
      <div className="card p-3" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top border border-2 m-1" alt={name} />
        <div className="card-body text-center">
          <h5 className="card-title fs-2">{name}</h5>
          <p className="card-text fs-3">Price : {price}</p>
          <div className='d-flex justify-content-evenly'>
            {/* <Link to={`/order-detail/${dishId}`} className='fs-5 bg-success text-white rounded rounded-1 text-decoration-none p-1'>
              Dish Details
            </Link> */}
            <button className='btn btn-success' onClick={alert("This page is under maintaince You can Access it after some time")}>Show Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDish;
