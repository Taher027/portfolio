import React from 'react';
import project1 from '../assets/BD-BUY-SELL.png';
import project2 from '../assets/Home-ArtSnap.png';
import project3 from '../assets/Test-Your-Skill.png'
import project from '../assets/project.png';

const MyProjects = () => {
    return (
        <div id='project' className='bg-[#18191A] px-10 pb-16 pt-6'>
            <div className='mb-16'>
            <img className='w-16 mx-auto ' src={project} alt="" />
                <h2 className='text-4xl text-white font-semibold text-center'>Some of my React project </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  '>
                <div className="card  bg-neutral text-white shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={project2} alt="project-img" className="rounded-xl" />
                            </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Photography Website</h2>
                            <p>This website built with react, node , firebase, mongodb, express js </p>
                            <div className="card-actions">
                            <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                </div>
                <div className="card  bg-neutral text-white shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={project3} alt="project-img" className="rounded-xl" />
                            </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Buy & Sell Website</h2>
                            <p>This website built with react, node , firebase, mongodb, express js </p>
                            <div className="card-actions">
                            <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                </div>
                <div className="card  bg-neutral text-white shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={project1} alt="project-img" className="rounded-xl" />
                            </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Learning Website</h2>
                            <p>This website built with react, node , firebase, mongodb, express js </p>
                            <div className="card-actions">
                            <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;