import React from 'react'
import {Footer, Blog, Possibility, Feature, WhatGPT3, Header} from './containers';
import {CTA, Brand, Navbar} from './components';
import './app.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <div>
          <Brand />
          <WhatGPT3 />
          <Feature />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
        </div>
    </div>
  )
}

export default App