import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Cardd = ({item, setProd}) => {
  const navigate=useNavigate()
  return (
    <>
     <div className='cardbox' onClick={()=>{
      setProd(item)
      console.log(item.image)
      navigate("/summery")
    }}>
        <div className='title'><h4>{item.title}</h4></div>
        <div className='productimage'><img src={item.image} alt="1" /></div>
        <div className='clicktext'><p>click on the image for more details</p></div>
        <div className='price'><h6>Rs/-{item.price}</h6></div>
        <div className='offer'><h>category: </h>{item.category}</div>
    </div>
    </>
   
  )
}


export default Cardd;