import React from 'react';
import facebook from '../assets/facebook.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <div className="items-center grid-flow-col">
    
    <p>Copyright © 2022 - All right reserved by |TAHER|</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <div>
        <a href='https://www.facebook.com/taher.bl.27/'><img className='w-8' src={facebook} alt="facebook-img" /></a>
    </div>
    <div>
    <a href='www.linkedin.com/in/taher027'><img className='w-8' src={linkedin} alt="linkedin-img" /></a>
    </div>
    
    <a href='https://github.com/Taher027'><img className='w-8' src={github} alt="github-img" /></a>
    <div>
        
    </div>
  </div>
</footer>
    );
};

export default Footer;