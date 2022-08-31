import React, { useEffect } from "react";
import { useState } from "react";

function Checkout(props) {
  const [percentage, setPercentage] = useState('0%');
  const [activeCircle, setActiveCircle] = useState('');
  const [activeCircle2, setActiveCircle2] = useState('');
  const page = props.page;

    useEffect(() => {
      if (page === 0) {
        setPercentage(0)
      }else if(page === 1){
        setPercentage('50%')
        setActiveCircle('active_circle')
      }else{
        setPercentage('100%')
        setActiveCircle2('active_circle')
      }
    }, [page])
    
  return (
    <div className="text-center">
      <h1 className="mb-4 title_one">Checkout</h1>
      <div className="main_Line">
        <div className="inner_line" style={{width:percentage}}></div>
        <div className="circle circle1 active_circle">
          <span className="circle_inner">Overview</span>
        </div>
        <div className={`circle circle2 ${activeCircle}`}>
          <span className="circle_inner">Payment</span>
        </div>
        <div className={`circle circle3 ${activeCircle2}`}>
          <span className="circle_inner">Completed</span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
