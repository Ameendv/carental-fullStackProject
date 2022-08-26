import React from 'react'
import './LoadingSpinner.css'


function LoadingSpinner() {
  return (

    <div className="container " style={{padding:'250px'}}>
        <div className="row d-flex justify-content-center"> <div className="lds-dual-ring"></div></div>
    </div>
   
  )
}

export default LoadingSpinner
