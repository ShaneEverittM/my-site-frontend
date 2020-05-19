import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { BsHouse } from 'react-icons/bs'
import "../styles/Header.css"
import "../styles/Button.css"
const Header = ({ showSidebar }) => {
    return (
        <div className='header'>
            <div className='top-left-icons'>
                <Link to="/" style={{ all: "unset" }}>
                    <div className='button'><BsHouse /></div>
                </Link>
                <div onClick={showSidebar} className='button'><FaBars /></div>
            </div>
            <Link to="/about" style={{ all: "unset" }}>
                <div className='button'> About </div>
            </Link>
        </div >
    )
}
export default Header;