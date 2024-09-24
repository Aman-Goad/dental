import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({link, text}) => {
  return (
    <Link to={link} className='bg-bgblue z-30 text-textwhite border px-4 py-2 rounded-md
    hover:bg-transparent hover:border  duration-150 border-bgblue
    '>
        {text}
    </Link>
  )
}

export default Button
