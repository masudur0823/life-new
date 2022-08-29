import React from 'react'
import Checkout from '../../Components/Cart/Checkout'
import LoginHeader from '../../Components/Header/LoginHeader'

function Cart() {
  return (
    <div className="img_overlay">
      <LoginHeader />
      <Checkout />
    </div>
  )
}

export default Cart