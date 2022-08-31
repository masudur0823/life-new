import React, { useEffect } from 'react'
import img from '../../assets/images/verify-1.png'

function Complete() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container pb-5 text-center">
      <img src={img} className="verify_img" alt="" />
      <h1 className='title_one my-3'>Thank you for your order</h1>
      <p className='para1 my-3'>
        An email was sent to your email with all details about your order: services, receipt and time.
      </p>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        <button className='button2'>print receipt</button>
        <button className='button1'>receipt via email</button>
      </div>
    </div>
  )
}

export default Complete