import React from 'react'
import Nav from './Nav'
import Logo from '../logo.svg'

const Header = () => {
  return (
    <div className='HeaderSection'>
        <div className="leftSideHeader">
        <img className='logo' src={Logo} alt="" />
        <h1>Places I've been to</h1>
        </div>
        <Nav/>
    </div>
  )
}

export default Header
