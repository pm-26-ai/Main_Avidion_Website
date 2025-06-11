'use client'
import Lottie from 'lottie-react';
import animationData from '../src/animations/animation.json';

const LottieAnimation = () => {
  return (
    <div style={{ width: 300, height: 300 }}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottieAnimation;