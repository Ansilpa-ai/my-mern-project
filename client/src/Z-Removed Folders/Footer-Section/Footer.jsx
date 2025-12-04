import React from 'react'
import '../Footer-Section/Footer.css'
import Dates from '../Footer-Section/FooterImages/Dates.jpg'
import Bananas from '../Footer-Section/FooterImages/Banana.jpg'
import Fruits from '../Footer-Section/FooterImages/Fruits.jpg'

const Footer = () => {
  return (
<div className='footer'>


         <div className='footer-contacts'>
           <h2>CONTACTS</h2>
            <p>+91 8137XXXXXX</p>
            <p>fruitmart@gmail.com</p>
            <p>Kerala,India</p>

           <ul className='ul1'>
            <li><i class="fa-brands fa-facebook-f"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-youtube"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
           </ul>
          </div>

         <div className='footer-company'>
           <h2>OUR COMPANY</h2>
            <ul className='ul2'>
             <li>Search Page</li>
             <li>About Us</li>
             <li>Contact Us</li>
             <li>Collections</li>
             <li>Catalog page</li>
            </ul>
         </div>
         <div className='footer-information'>
           <h2>INFORMATIONS</h2>
            <ul className='ul3'>
             <li>Privacy Policy</li>
             <li>FAQs</li>
             <li>Login page</li>
             <li>Term of use</li>
            </ul>
         </div>
         <div className='footer-categories'>
          <h2>CATEGORIES</h2>  
           <ul className='ul4'>
            <li>Dates</li>
            <li>Bananas</li>
            <li>Fruits</li>
           </ul>
         </div>
         <div className='footer-fruitmart'>
          <h2>@FRUITMART</h2> 
            <div className='footer-images'>
             <img src={Dates} alt="" width={150} height={100} />
            <img src={Bananas} alt="" width={150} height={100} />
            <img src={Fruits} alt="" width={150} height={100} />
            </div> 
           
         </div>

      
      <hr />

      <div className='footer-last'>
          <p className='footer-last-p'>
        @2025 all rights reserved by FruitMart.
          </p>
        
      </div>



</div>
  )
}

export default Footer
