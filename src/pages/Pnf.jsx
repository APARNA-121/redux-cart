import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img width={'40%'} src="https://cdn.dribbble.com/userupload/24450589/file/original-7a69eb5b87401ce59325c3291535aebc.gif" alt="page not found" />
      <h4>Look Like You're Lost</h4>
      <p>The page you are looking is not available</p>
      <Link to={'/'} className='btn btn-primary'>Back to Home</Link>
    </div>
  )
}

export default Pnf