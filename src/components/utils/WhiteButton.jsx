import React from 'react'
import { Link } from 'react-router-dom'

const WhiteButton = ({link, text }) => {
  return (
    <Link to={link} className={`bg-textwhite text-bgblue  border px-4 py-2 rounded-md
        hover:bg-transparent hover:text-textwhite hover:border duration-150 border-textwhite z-50`}>
            {text}
        </Link>
  )
}

export default WhiteButton
