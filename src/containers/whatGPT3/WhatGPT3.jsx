import React from 'react'
import './whatgpt3.css';
import Feature from './../../components/feature/Feature';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title={"Whats is GPT3"}  text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'> Possibility beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
          <Feature  title={"Chatbots"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
          <Feature  title={"Knowledgebase"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
          <Feature title={"Education"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>
      </div>
    </div>
  )
}

export default WhatGPT3