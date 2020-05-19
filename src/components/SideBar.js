import React from 'react'
import { Link } from 'react-router-dom'
import { FaFolder } from 'react-icons/fa'
import '../styles/Sidebar.css'
import { FaRProject } from 'react-icons/fa'
const SideBar = () => {
    return (
        <div className='sidebar'>
            <header className="sidebar-header">Projects</header>
            <div className='sidebar-list'>
                <Link to="/filesystem" style={{ all: "unset" }}>
                    <div className='sidebar-list-item'><FaFolder /> FileSystem</div>
                </Link>
                <Link to="/filesystem" style={{ all: "unset" }}>
                    <div className='sidebar-list-item'><FaFolder /> TBD</div>
                </Link>
                <Link to="/filesystem" style={{ all: "unset" }}>
                    <div className='sidebar-list-item'><FaFolder /> TBD</div>
                </Link>
                <Link to="/filesystem" style={{ all: "unset" }}>
                    <div className='sidebar-list-item'><FaFolder /> TBD</div>
                </Link>
            </div>
        </div>
    )
}
export default SideBar;