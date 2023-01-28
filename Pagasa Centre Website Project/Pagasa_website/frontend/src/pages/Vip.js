import React from 'react'
import SimpleCard from '../components/SimpleCard'
import Footer from '../components/Footer'

function Vip(props) {
  return (
    <React.StrictMode>
        <div className='starting-section mx-5'>
            <div className='d-flex flex-column mb-4'>
                <h1 className='d-flex justify-content-center display-1 fw-bold'>NEW HERE? GET CONNECTED!</h1>
                <h3 className='d-flex justify-content-center fs-3'>If you are new to Pag-asa Centre, we encourage you to join a cell group!</h3>
            </div>
            <div className='d-flex'>
                <div className='col-6 me-3'>
                    <SimpleCard  cardtype="VIP"/>
                </div>
                <div className='col-6 ms-3 pe-4'>
                    <h3 className='text-end fw-bold fs-3'>What is a cell group?</h3>
                    <br></br>
                    <p className='text-end fs-4'>
                        A leader arranges a small gathering called a cell group
                        once a week in a home. Its primary goal is to bring new
                        people to Christ, whom the leader guides through a
                        process of spiritual development based on God's Word.
                    </p>
                    <br></br>
                    <p className='text-end fs-4'>
                        The fundamental unit of the church is the cell group.
                        They serve as the cornerstone of the church and are
                        essential to achieving the G12 Vision, bearing fruit, and
                        experiencing multiplication and growth.
                    </p>
                </div>
            </div>
            
            

        </div>
        <Footer />
    </React.StrictMode>
  )
}

export default Vip
