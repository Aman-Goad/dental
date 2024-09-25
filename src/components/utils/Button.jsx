import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({link, text , color , bg}) => {
  return (
    <Link to={link} className={`${bg || 'bg-bgblue'} ${color || 'text-textwhite'} z-30 border px-4 py-2 rounded-md
    hover:${bg || 'bg-white'} hover:${color || 'text-bgblue'} hover:border duration-150 border-bgblue`}>
        {text}
    </Link>
  )
}

export default Button
