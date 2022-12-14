import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-neutral text-white px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href='#about_me'>ABOUT ME</a ></li>
              <li><a href = '#skills' >SKILLS</a ></li>
              <li><a href = '#project' >PROJECTS</a ></li>
              <li><a href = '#contact' >CONTACT ME</a ></li>
            </ul>
          </div>
          <a href='#test' className="btn btn-ghost normal-case text-xl font-serif">TAHER</a >
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-bold">
          <li><a href='#about_me'>ABOUT ME</a ></li>
              <li><a href = '#skills' >SKILLS</a ></li>
              <li><a href = '#project' >PROJECTS</a ></li>
              <li><a href = '#contact' >CONTACT ME</a ></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href='test' className="btn btn-primary">RESUME</a >
        </div>
      </div>
    );
};

export default Header;