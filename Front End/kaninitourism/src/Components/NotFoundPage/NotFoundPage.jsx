import React from 'react'
import './NoFoundPage.css'
import { Link } from '@mui/material'

const NotFoundPage = () => {
  return (
    <>
      <button style={{ display: 'flex', justifyContent: 'center' }}><Link style={{textDecoration:'none',color:'black'}} to={'/'}> Go Back </Link></button>
      <div className='notfoundpage'>

      </div>
    </>
  )
}

export default NotFoundPage