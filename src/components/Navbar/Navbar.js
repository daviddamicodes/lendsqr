import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
// import LendsqrLogo from '../../images/lendsqr-logo.png';
import userPhoto from '../../images/user-photo.jpg';
import {IoSearch} from 'react-icons/io5';
import { FiBell } from 'react-icons/fi';
import { AiFillCaretDown } from 'react-icons/ai';
import { NavLogo } from '../../images/icons';

const Navbar = () => {

    // const [searchQuery, setSearchQuery] = useState('')
    
    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     const filterSearch = (arr, query) => {
    //         return data = arr.filter(el => el.indexOf(query) !== -1)
    //     }
    //     filterSearch(data, searchQuery)
    // }

    // const handleSearchInput = (e) => {
    //     setSearchQuery(e.target.value)
    // }

    // // const handleSearch  = () => {
    // // }

    // useEffect(() => {
    //     handleSearch();
    // }, [searchQuery]) 

    return (
        <div>
            <div className="nav-container">
                <div className="nav-logo">
                    <Link to="/">
                        {/* <img src={LendsqrLogo} alt="Logo" className="logo-img" /> */}
                        <NavLogo />
                    </Link>
                </div>
                <div className="search-box">
                    <form action="submit" className="input-container">
                        <input type="text" className='search-input' placeholder="Search for anything" />
                        <button className="search-button" onClick={(e) => e.preventDefault()}><IoSearch className="search-icon" /></button>
                    </form>
                </div>
                <div className="user-nav">
                    <Link className="nav-docs">Docs</Link>
                    <FiBell className="nav-bell" />
                    <div className="nav-user">
                        <div className="user-img-container">
                            <img src={userPhoto} alt="" className="user-img" />
                        </div>
                        <h3 className="user-name">Ayodeji</h3>
                        <AiFillCaretDown className="nav-dropdown" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
