import React from 'react'
import Footer from '../components/Footer'
import PictureandName from '../components/PictureandName'


function CellLeaders(props) {
  return (
    <React.StrictMode>
        <div className='starting-section'>
            <div className='d-flex flex-column mb-4'>
                <h1 className='d-flex justify-content-center display-1 fw-bold '>OUR PRIMARY LEADERS</h1>
                <h3 className='d-flex justify-content-center fs-3'>Meet our leaders! These people are committed in helping you in your walk of faith in Christ.</h3>
            </div>
            <div className='mx-6'>
                <PictureandName/>
            </div>
        </div>
    <Footer />
</React.StrictMode>
  )
}

export default CellLeaders

