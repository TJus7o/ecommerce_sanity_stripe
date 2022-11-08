import React from 'react'
import { AiFillInstagram, AiOutlineFacebook } from 'react-icons/ai'

const footer = () => {
  return (
    <div className='footer-container'>
    <p>2022 Susy Store All rights reserved</p>
    <p className='icons'>
    <AiFillInstagram />
    <AiOutlineFacebook />
    </p>
    </div>
  )
}

export default footer