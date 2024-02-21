import React from 'react';
import { Footer ,Blog , Possibility,WhatGPT ,Feeatures, Header } from './containers';
import { Cta , Brand , NavBar} from './Components';
import './App.css'


function App ()  {
  return (
      
      <div className='App'>
        <div className='gradient__bg'>
          <NavBar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGPT/>
        <Feeatures/> 
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
        </div>
      
  );
}

export default App ;
