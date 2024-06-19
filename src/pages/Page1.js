import React from 'react'
import { Link } from 'react-router-dom'

const Page1 = () => {
  return (
   <>
    <h1>Welcome to Weather Forecaster</h1>

    <Link to="/weather">
    <button>Click here to open weather forecastor</button>
    </Link>
    
   </>
  )
}

export default Page1
