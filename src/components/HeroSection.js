import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/Banking-System/videos/video-2.mp4' autoPlay loop muted />
      <h1>Vision Bank</h1>
      <p>A Safe Place To Invest Your Earnings !!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={'/transfer'}
        >
          Have Your First Transaction !!<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;