import React from 'react'
import {useState} from 'react';
import {RiMenu3Line ,RiCloseLine} from 'react-icons/ri';
import './navbar.css'  
import logo from '../../assets/logo.svg' 
// check BEM : Block element modifier

const NavBar = () => {
 
  const [toggleMenu , setToggleMenu]=useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />

        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>

      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in </p>
        <button type='button'>Sign up</button>
      </div>
       {/* for mobile phone*/}
       {/* <div className='gpt3__navbar-sign' >
        {toggleMenu 
              ? <RiCloseLine color='#FFF' size={27} onClick={()=>setToggleMenu(false)}/>
              : <RiMenu3Line color='#FFF' size={27} onClick={()=>setToggleMenu(true)}
               />}
               {toggleMenu && (
                <>
                <div className='gpt3__navbar_menu_container scale-up-center'>
                <div className='gpt3__navbar-menu_container-links'>
                <p><a href="#home">Home</a></p>
                <p><a href="#wgpt3">What is GPT?</a></p>
                <p><a href="#possibility">Open AI</a></p>
                <p><a href="#features">Case Studies</a></p>
                <p><a href="#blog">Library</a></p>
            </div>
          <div className='gpt3__navbar-menu_'>
        <p>Sign in </p>
        <button type='button'>Sign up</button>
      </div>
      </div>
      </>)}
       </div>
               */}
    </div>
  );
};

export default NavBar
