import React from "react";
import img1 from '../../assets/images/payment_icon/payoneer.png'
import img2 from '../../assets/images/payment_icon/vias.png'
import img3 from '../../assets/images/payment_icon/paypal.png'
import img4 from '../../assets/images/payment_icon/Single_Euro_Payments_Area_logo.png'
import img5 from '../../assets/images/payment_icon/Klarna_Logo_black.png'
import img6 from '../../assets/images/payment_icon/giro.png'

function Payment() {
  return (
    <>
      <div className="container">
        <div className="payment_img">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div>
            <img src={img6} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
