import React, { useState, useEffect } from 'react';
import './LogoAnimation.css';

const logoUrl = process.env.PUBLIC_URL + '/drnklogo.png';
const dropletUrl = process.env.PUBLIC_URL + '/droplet.png';

// Use the logoUrl and dropletUrl variables in your code


const LogoAnimation = () => {
  const [droplet, setDroplet] = useState(false);

  useEffect(() => {
    // Start the animation after the component mounts
    setDroplet(true);
  }, []);

  const onAnimationEnd = () => {
    // Reset the animation after it finishes
    setDroplet(false);
  };

  return (
    <div className="logo-container">
      <div className={`logo${droplet ? ' droplet' : ''}`} onAnimationEnd={onAnimationEnd}></div>
    </div>
  );
};

export default LogoAnimation;
