import React from 'react'
import '../Fourth-Section/SpecialOffer.css'
import DatesOffer from '../Fourth-Section/DatesImages/DatesOffer1.jpg'
import DatesOffer1 from '../Fourth-Section/DatesImages/DatesOffer.jpg'
import Ajwa from '../Fourth-Section/DatesImages/Ajwa.jpg'
import Medjool from '../Fourth-Section/DatesImages/Medjool.jpg'
import Safawi from '../Fourth-Section/DatesImages/Safawi.jpg'
import Khalas from '../Fourth-Section/DatesImages/Khalas.jpg'
import Sagai from '../Fourth-Section/DatesImages/Sagai.jpg'
import Khudri from '../Fourth-Section/DatesImages/Khudri.jpg'
import Mabroom from '../Fourth-Section/DatesImages/Mabroom.jpg'
import Sukkary from '../Fourth-Section/DatesImages/Sukkary.jpg'

const SpecialOffer = () => {
  return (
    <div className='SpecialOffer'>

        <div className='Dates-heading'>
        <h1>DATES ON OFFER</h1>
        </div>

      <div className='Dates-image'>
        <img src={DatesOffer} alt=""  />
         {/* <img src={DatesOffer1} alt="" width={650} height={400} /> */}
      </div>

      <div className='Dates-card'>
        <div className='Dates-card-list'>
           <img src={Ajwa} alt="" /> 
           <h2>AJWA </h2>
           <p className='p'>Fresh Fruit</p>
            <h3>Rs.700/kg</h3>
       <button className='add-to-cart3'>ADD TO CART <span className='plus3'><i class="fa-solid fa-circle-plus"></i></span></button>
        </div>

         <div className='Dates-card-list'>
           <img src={Khudri} alt="" /> 
           <h2>Khudri</h2>
           <p className='p'>Fresh Fruit</p>
            <h3>Rs.650/kg</h3>
       <button className='add-to-cart3'>ADD TO CART <span className='plus3'><i class="fa-solid fa-circle-plus"></i></span></button>
        </div>

         <div className='Dates-card-list'>
           <img src={Mabroom} alt="" /> 
           <h2>Mabroom</h2>
           <p className='p'>Fresh Fruit</p>
            <h3>Rs.900/kg</h3>
       <button className='add-to-cart3'>ADD TO CART <span className='plus3'><i class="fa-solid fa-circle-plus"></i></span></button>
        </div>

         <div className='Dates-card-list'>
           <img src={Safawi} alt="" /> 
           <h2>Safawi</h2>
           <p className='p'>Fresh Fruit</p>
            <h3>Rs.500/kg</h3>
       <button className='add-to-cart3'>ADD TO CART <span className='plus3'><i class="fa-solid fa-circle-plus"></i></span></button>
        </div>

         <div className='Dates-card-list'>
           <img src={Khalas} alt="" /> 
           <h2>Khalas</h2>
           <p className='p'>Fresh Fruit</p>
            <h3>Rs.350/kg</h3>
       <button className='add-to-cart3'>ADD TO CART <span className='plus3'><i class="fa-solid fa-circle-plus"></i></span></button>
        </div>

         <div className='Dates-card-list'>
           <img src={Sagai} alt="" /> 
           <h2>Sagai</h2>
           <p className='p'>Fresh Fruit</p>
            <h3>Rs.800/kg</h3>
       <button className='add-to-cart3'>ADD TO CART <span className='plus3'><i class="fa-solid fa-circle-plus"></i></span></button>
        </div>

<div className='Dates-card-list'>
           <img src={Medjool} alt="" /> 
           <h2>Medjool </h2>
           <p className='p'>Fresh Fruit</p>
            <h3>Rs.1200/kg</h3>
       <button className='add-to-cart3'>ADD TO CART <span className='plus3'><i class="fa-solid fa-circle-plus"></i></span></button>
        </div>


         <div className='Dates-card-list'>
           <img src={Sukkary} alt="" /> 
           <h2>Sukkary</h2>
           <p className='p'>Fresh Fruit</p>
            <h3>Rs.570/kg</h3>
       <button className='add-to-cart3'>ADD TO CART <span className='plus3'><i class="fa-solid fa-circle-plus"></i></span></button>
        </div>
      </div>

    </div>
  )
}

export default SpecialOffer
