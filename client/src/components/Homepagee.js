import React from 'react';
import Navbarr from './Navbarr';
import Footerr from './Footerr';
import { useEffect, useState } from 'react';
import ImageSlider from './carosuel-data/ImageSlider';
import { SliderData } from './carosuel-data/SliderData';
import  Cardd  from './Cardd';


const Homepagee = ({setProd}) => {
  const [data, setdata] = useState([])
  const getdata = async()=>{
    const response = await fetch("https://fakestoreapi.com/products",
    {
      method:"GET",
      headers: {'Content-Type': 'application/json'}
    }
    )
    const data = await response.json()
    setdata(data)


  }
  useEffect(() => {
   getdata()
  }, [])
  
  
  return (
    <>
    <Navbarr/>
    <ImageSlider slides={SliderData}/>
    <div className="middle">
    {data.map((item)=>{
      return <Cardd item={item} key={item._id} setProd={setProd}/>
    })}
    </div>
    
    <Footerr/>
    </>
  )
}

export default Homepagee;