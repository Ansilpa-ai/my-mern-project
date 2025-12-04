import React from 'react'
import '../Third-Section/OfferSection.css'
import BananaOffer from '../Third-Section/OfferImages/bananaOffer.jpg'
import banana from '../Third-Section/OfferImages/bananaNendran.jpg'
import banana2 from '../Third-Section/OfferImages/bananaRobusta.jpg'
import banana3 from '../Third-Section/OfferImages/bananaNjalipoovan.jpg'
import banana4 from '../Third-Section/OfferImages/bananaPoovan.jpg'
import banana5 from '../Third-Section/OfferImages/bananaPalayankodan.jpg'
import banana6 from '../Third-Section/OfferImages/redBanana.jpg'

const OfferSection = () => {
  return (
    <div className='Offer-Section'>

       <div className='Offer-box'>

           <div className='Offer-box-heading'>
           <h1>Get Offer on Organic Fruit</h1>
            </div>

            <div className='Offer-box-image'>
             <img src={BananaOffer} alt=""  />
            </div>
          
             
          <div className='Offer-box-items'>
            
            <div className='Offer-box-items-list'>
              <img src={banana} alt="" /> 
             <h2> Nendran</h2>
             <p className='p'>Fresh Fruit</p>
             <h3>Rs.35/kg</h3>
             <button className='add-to-cart2'>ADD TO CART <span className='plus2'><i class="fa-solid fa-circle-plus"></i></span></button>
            </div>

            <div className='Offer-box-items-list'>
              <img src={banana5} alt="" /> 
             <h2> Palayamthodan</h2>
             <p className='p'>Fresh Fruit</p>
             <h3>Rs.20/kg</h3>
             <button className='add-to-cart2'>ADD TO CART <span className='plus2'><i class="fa-solid fa-circle-plus"></i></span></button>
            </div>


            <div className='Offer-box-items-list'>
              <img src={banana3} alt="" /> 
             <h2> Njalipoovan</h2>
             <p className='p'>Fresh Fruit</p>
             <h3>Rs.30/kg</h3>
             <button className='add-to-cart2'>ADD TO CART <span className='plus2'><i class="fa-solid fa-circle-plus"></i></span></button>
            </div>

           <div className='Offer-box-items-list'>
              <img src={banana4} alt="" /> 
             <h2> Poovan</h2>
             <p className='p'>Fresh Fruit</p>
             <h3>Rs.30/kg</h3>
             <button className='add-to-cart2'>ADD TO CART <span className='plus2'><i class="fa-solid fa-circle-plus"></i></span></button>
            </div>

             <div className='Offer-box-items-list'>
              <img src={banana2} alt="" /> 
             <h2>Robusta</h2>
             <p className='p'>Fresh Fruit</p>
             <h3>Rs.30/kg</h3>
             <button className='add-to-cart2'>ADD TO CART <span className='plus2'><i class="fa-solid fa-circle-plus"></i></span></button>
            </div>

            <div className='Offer-box-items-list'>
              <img src={banana6} alt="" /> 
             <h2>Red Banana</h2>
             <p className='p'>Fresh Fruit</p>
             <h3>Rs.35/kg</h3>
             <button className='add-to-cart2'>ADD TO CART <span className='plus2'><i class="fa-solid fa-circle-plus"></i></span></button>
            </div>
            
            </div>   
             

          </div>

    </div>
  )
}

export default OfferSection
