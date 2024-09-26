import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({link, text , color , bg}) => {
  return (
    <Link to={link} className={`bg-bgblue text-textwhite  border px-4 py-2 rounded-md
    hover:bg-white hover:text-bgblue hover:border duration-150 border-bgblue z-50`}>
        {text}
    </Link>
  )
}

export default Button
