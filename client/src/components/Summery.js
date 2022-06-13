import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbarr from './Navbarr';
//https://afternoon-mountain-39488.herokuapp.com/
const Summery = ({prod}) => {
  const navigatee = useNavigate();
  const addProduct=async()=>{
    const response = await fetch('http://localhost:5000/order',{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(prod)
    })
    const data= await response.json();
    console.log(data)
    window.alert("Product Added Sucessfully")
    navigatee("/")
}
  return (
    <>
    <Navbarr/>
    <div className='summerypage'>
    <div className='summimage'>
      <img src={prod.image} alt='img111'/>
    </div>
    <div className='details'>
      <h1>{prod.title}</h1>
      <p>{prod.description}</p>
      <h3>Rs/-{prod.price}</h3>
      <h3>{prod.category} Off </h3>
      <button onClick={addProduct}>Place Order</button>
    </div>
    </div>
    <p className='note'>*order will be recorded on database only after place order button click</p>
    </>
    
  )
}

export default Summery