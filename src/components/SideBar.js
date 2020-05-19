import React from 'react'
import Meme from '../images/outlook3.png'
import '../styles/Site.css'
const SideBar = () => {
    return (
        <div className='sidebar'>
            <img className='image' src={Meme} alt="Friendship STRENTH with outlook" />
        </div>
    )
}
export default SideBar;