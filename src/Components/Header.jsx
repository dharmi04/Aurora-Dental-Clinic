import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className="flex items-center justify-center">
        <img src={logo} alt="Aurora Dental Logo" className="h-20 w-30" />
      </div>
  )
}

export default Header
