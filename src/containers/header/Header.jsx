import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding ' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='your email address :' />
          <button type='button'>Get started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'  />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        
      </div>
      <div className='gpt3__header-img'>
          <img src={ai} alt='ai'/>
        </div>
    </div>
  )
}

export default Header
