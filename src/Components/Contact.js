import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='bg-[#18191A]'>
          

                <div>
                   <div className='w-3/4 mx-auto'>
                   <h2 className='text-4xl text-white text-center'>If, You want to contact me via mail, just fill the from and hit submit.</h2>
                   </div>
                <form className="card-body bg-[#18191A] text-white w-1/2 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Message</span>
                            </label>
                            <input type="text" name='message' placeholder="Your Message" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Submit" />
                        </div>
                    </form> 
                </div>   
        </div>
    );
};

export default Contact;