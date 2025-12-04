import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Navbar/Navbar.css'

const Navbar = () => {

 const navigate = useNavigate()
 const [openDropdown,setOpenDropdown] = useState(false)

  return (
    <div className='home-navbar'>
        <div className='navbar-name'>
           {/* <img src={logos} alt="" width={50} height={50} /> */}
          
         <h2 onClick={()=>{navigate('/')}}><i class="fa-solid fa-lemon"></i> FruitMart</h2>
        </div>

       <div className='navbar-search'>
         <input type="text" placeholder='Search Fruits...' />
         <i className='fa-solid fa-magnifying-glass'></i>
       </div>

        <div className='navbar-list'>
          <ul>
            <li onClick={()=>{navigate('/')}}>Home</li>
            <li onClick={()=>{navigate('/menu')}}>Menu</li>
            <li className='dropdown-click' onClick={()=>setOpenDropdown(!openDropdown)}>
              Special Offer
                {openDropdown && (
                    <ul className='dropdown-menu-click'>
                 <li onClick={()=>navigate('/Special')}>Dates</li>
                 <li onClick={()=>navigate('/offer')}>Banana</li>
               </ul>
                )}
             </li>
            <li onClick={()=>{navigate('/footer')}}>Contact Us</li>
          </ul>
        </div>
        <div className='navbar-login'>
         <button onClick={()=>{navigate('/login')}}>Login</button>
        </div>
     </div>
  )
}

export default Navbar
