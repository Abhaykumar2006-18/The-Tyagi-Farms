import React from 'react'
import styles from './style/NavBar.module.css'
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from 'react';



const NavBar = () => {
  
   const [isOpen, setisOpen] = useState(false);
   const toggle = ()=>{
      setisOpen(!isOpen);
   }




  return (
    <>
   <div className='relative'>
    <div className={styles.main}>
         <div className={styles.logo}><h1>Tyagi Farms</h1></div>
         <div className={styles.menu}>
            <Link to='/'>Home</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/services'>Services</Link>
            <Link to='/experiences'>Experiences</Link>
            <Link to='/aboutUs'>About us</Link>
         </div>

         <div className={styles.booking}><Link to='/booking'><button>Bookings</button></Link></div>
         {!isOpen && (<div className={styles.bar} onClick={toggle}><FaBarsStaggered /></div>)}
        {isOpen && (<div className={styles.cross} onClick={toggle}><RxCross2 /></div>)}

    </div>

    <div className={`${styles.sideMenu} ${isOpen ? styles.showMenu : ""} `}>
         <Link to='/'>Home</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/services'>Services</Link>
            <Link to='/experiences'>Experiences</Link>
            <Link to='/aboutUs'>About us</Link>
    </div>

</div>
   
    </>
  )
}

export default NavBar