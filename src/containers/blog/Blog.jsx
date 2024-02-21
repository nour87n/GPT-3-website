import React from 'react'
import './blog.css'
import Article from '../../Components/article/Article'
import { blog01 , blog02,blog03,blog04,blog05} from './imports.jsx';


const  Blog =()=> {
  return (
    <div className='gpt3__blog' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Feb 21,2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="Feb 21,2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog03} date="Feb 21,2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog04} date="Feb 21,2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog05} date="Feb 21,2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>

        </div>
      </div>
      
    </div>
  )
}

export default Blog
