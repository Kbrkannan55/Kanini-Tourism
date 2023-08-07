import React from 'react'
import './NoFoundPage.css'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <>
      <button style={{ display: 'flex', justifyContent: 'center' }}><Link to={'/'} style={{textDecoration:'none',color:'black'}} > Go Back </Link></button>
      <div className='notfoundpage'>

      </div>
    </>
  )
}

export default NotFoundPage