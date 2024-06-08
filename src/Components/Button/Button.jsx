import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css';


const Button = ({to,children,className}) => {
  return (
      <Link to={to} className={`btn-smc ${className}`}>
        <span>
            {children}
        </span>
        </Link>
  )
}

export default Button;
