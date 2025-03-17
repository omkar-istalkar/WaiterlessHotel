import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config'

const AddDish = () => {
  const [dname, setdname] = useState('');
  const [dprice, setdprice] = useState('');
  const [dcat, setdcat] = useState('');
  const [speciality, setspeciality] = useState('');
  const [file, setfile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setfile(selectedFile);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!dname || !dprice || !dcat || !file || !speciality) {
      alert('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('name', dname);
    formData.append('price', dprice);
    formData.append('Category', dcat);
    formData.append('Image', file);
    formData.append('IsSpeciality', speciality);

    try {
      const res = await axios.post(`${API_BASE_URL}/add-dish`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Dish added successfully');
    } catch (err) {
      alert('Error adding dish');
    }
  };

  return (
    <div>
      <div className='container p-3 m-1 text-center'>
        <h1>Add details of dish</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className='mb-3 d-flex flex-row p-2'>
          <h4 className='fs-5'>Enter image of your dish : </h4>
          <input
            type='file'
            className='form-control'
            id='inputGroupFile02'
            onChange={handleFileChange}
            required
          />
        </div>
        <div className='mb-3 d-flex flex-row p-2'>
          <h4 className='fs-5'>Enter name of your dish</h4>
          <input
            type='text'
            className='m-1 w-100 fs-6'
            placeholder='Name of your dish'
            value={dname}
            onChange={(e) => setdname(e.target.value)}
          />
        </div>
        <div className='mb-3 d-flex flex-row p-2'>
          <h4 className='fs-5'>Enter price of your dish</h4>
          <input
            type='number'
            className='m-1 w-100 fs-6'
            placeholder='Price of your dish'
            value={dprice}
            onChange={(e) => setdprice(e.target.value)}
          />
        </div>
        <div className='mb-3 d-flex flex-row p-2'>
          <h4 className='fs-5'>Is this dish veg or non-veg?</h4>
          <select
            className='form-control'
            value={dcat}
            onChange={(e) => setdcat(e.target.value)}
            required
          >
            <option value=''>Select category</option>
            <option value='Veg'>Veg</option>
            <option value='Non-Veg'>Non-Veg</option>
          </select>
        </div>
        <div className='mb-3 d-flex flex-row p-2'>
          <h4 className='fs-5'>Is this dish your speciality?</h4>
          <select
            className='form-control'
            value={speciality}
            onChange={(e) => setspeciality(e.target.value)}
            required
          >
            <option value=''>Select speciality</option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
        </div>
        <div className='mb-3 text-center'>
          <button type='submit' className='btn btn-primary'>
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDish;
