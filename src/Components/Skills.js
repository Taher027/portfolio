import React from 'react';
import CheckIcon from '../assets/check-mark.png';
import skills from '../assets/soft-skills.png'

const Skills = () => {
    return (
        <div id='skills' className='py-16 bg-[#18191A]'>
            <div  className=' text-center pb-8'>
                <img className='w-16 mx-auto ' src={skills} alt="" />
                <h2 className='text-4xl text-white font-semibold'>My Comfortable Skills</h2>
            </div>
            <div className='py-8 gap-4 grid grid-cols-1 lg:grid-cols-2 px-10 text-white bg-[#18191A] mx-auto w-full'>
                <div className='flex items-center gap-5 bg-neutral py-3 px-4 rounded-md'>
                    <img className='w-8 ' src={CheckIcon}  alt="" />
                    <p className=''>HTML</p>
                </div>
                <div className='flex items-center gap-5 bg-neutral py-3 px-4 rounded-md'>
                    <img className='w-8 ' src={CheckIcon}  alt="" />
                    <p className=''>CSS</p>
                </div>
                <div className='flex items-center gap-5 bg-neutral py-3 px-4 rounded-md'>
                    <img className='w-8 ' src={CheckIcon}  alt="" />
                    <p className=''>Tailwind</p>
                </div>
                <div className='flex items-center gap-5 bg-neutral py-3 px-4 rounded-md'>
                    <img className='w-8 ' src={CheckIcon}  alt="" />
                    <p className=''>Bootstrap</p>
                </div>
                <div className='flex items-center gap-5 bg-neutral py-3 px-4 rounded-md'>
                    <img className='w-8 ' src={CheckIcon}  alt="" />
                    <p className=''>Javascript</p>
                </div>
                <div className='flex items-center gap-5 bg-neutral py-3 px-4 rounded-md'>
                    <img className='w-8 ' src={CheckIcon}  alt="" />
                    <p className=''>React Js</p>
                </div>
                <div className='flex items-center gap-5 bg-neutral py-3 px-4 rounded-md'>
                    <img className='w-8 ' src={CheckIcon}  alt="" />
                    <p className=''>Express Js</p>
                </div>
                <div className='flex items-center gap-5 bg-neutral py-3 px-4 rounded-md'>
                    <img className='w-8 ' src={CheckIcon}  alt="" />
                    <p className=''>Node</p>
                </div>
                <div className='flex items-center gap-5 bg-neutral py-3 px-4 rounded-md'>
                    <img className='w-8 ' src={CheckIcon}  alt="" />
                    <p className=''>MongoDB</p>
                </div>
                <div className='flex items-center gap-5 bg-neutral py-3 px-4 rounded-md'>
                    <img className='w-8 ' src={CheckIcon}  alt="" />
                    <p className=''>Firebase</p>
                </div>
                <div className='flex items-center gap-5 bg-neutral py-3 px-4 rounded-md'>
                    <img className='w-8 ' src={CheckIcon}  alt="" />
                    <p className=''>WordPress</p>
                </div>
                <div className='flex items-center gap-5 bg-neutral py-3 px-4 rounded-md'>
                    <img className='w-8 ' src={CheckIcon}  alt="" />
                    <p className=''>WIX</p>
                </div>
                
            </div>
        </div>
    );
};

export default Skills;