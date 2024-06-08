import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Button from '../Button/Button';

const Navbar = ({ brandName, imageSrcPath, navItems }) => {
  return (
    <nav className="xl:px-[4.3rem] navbar bg-[#144688]">
        <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-xl hover:bg-inherit" href='/home'>
            {/* <img src={imageSrcPath} alt={`${brandName} logo`} className="h-10 mr-2" /> */}
            {/* {brandName} */}
            <svg className='text-sm text-white w-[2rem]' viewBox="0 0 35 39" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.31607 26.8951L0.76676 19.3458C0.353703 18.9327 0.382688 18.2545 0.822927 17.8705C8.00634 11.6055 10.8612 6.94658 11.4554 5.2172C11.487 5.12516 11.5 5.02957 11.5 4.93224V1.579C11.5 1.02671 11.9477 0.578999 12.5 0.578999H23.5C24.0523 0.578999 24.5 0.708394 24.5 1.26068V6.079C24.5 11.4366 15.0418 21.7979 9.69865 26.9173C9.30923 27.2904 8.69743 27.2764 8.31607 26.8951Z"/>
                <path d="M26.1839 12.1049L33.7332 19.6542C34.1463 20.0673 34.1173 20.7455 33.6771 21.1295C26.4937 27.3945 23.6388 32.0534 23.0446 33.7828C23.013 33.8748 23 33.9704 23 34.0677L23 37.421C23 37.9733 22.5523 38.421 22 38.421L11 38.421C10.4477 38.421 10 38.2916 10 37.7393L10 32.921C10 27.5633 19.4582 17.202 24.8014 12.0826C25.1908 11.7095 25.8026 11.7235 26.1839 12.1049Z"/>
            </svg>
            </a>
        </div>
        <div className="navbar-end items-center pe-[1rem]">
            <ul className="menu menu-horizontal px-1">
            {navItems.map((item, index) => (
                <li key={index}>
                <NavLink
                    to={item.path}
                    className={({ isActive }) => isActive ? "nav-link hover:bg-inherit hover:text-[#00173F]" : "nav-link hover:bg-inherit hover:text-[#00173F]"}
                >
                    {item.name}
                </NavLink>
                </li>
            ))}
            </ul>
            <Button to="/" className="btn-primary-smc">Get In Touch</Button>
        </div>
    </nav>
  );
};

export default Navbar;
