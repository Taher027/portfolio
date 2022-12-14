import React from 'react';
import taher from '../assets/taher.png'

const AboutMe = () => {
    return (
        <div id='about_me' className="hero min-h-screen bg-[#18191A] text-white px-10 ">
            <div className="hero-content flex-col lg:flex-row-reverse lg:mb-[-15px]">
                    <img  src={taher} alt="img" className=" max-w-sm rounded-lg  " />
                <div>
                <h1 className="text-4xl font-semibold md:py-3 ">HI, I'M ABU TAHER</h1>
                <div className='w-3/4 text-justify'>
                <p className="py-6">I’m very careful about my work. I love to explore new things and love to learn something new. You will find seeking improved knowledge, hardworking in me.</p>
                </div>
                <button className="btn btn-primary">WORK WITH ME</button>
                </div>
           </div>
      </div>
    );
};

export default AboutMe;