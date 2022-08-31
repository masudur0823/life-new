import React, { useState } from "react";
import Checkout from "../../Components/Cart/Checkout";
import Complete from "../../Components/Cart/Complete";
import Overview from "../../Components/Cart/Overview";
import Payment from "../../Components/Cart/Payment";
import LoginHeader from "../../Components/Header/LoginHeader";

function Cart() {

    const [page, setPage] = useState(0);

    const PageDisplay = () =>{
        if (page === 0) {
          return <Overview page={page} setPage={setPage} />;
        }else if (page === 1){
          return <Payment page={page} setPage={setPage} />;
        }else if (page === 2){
          return <Complete page={page} setPage={setPage} />;
        }
    }

  return (
    <div className="img_overlay">
      <LoginHeader />
      <Checkout page={page} />
      <div className="p-5"></div>

      <PageDisplay/>
    </div>
  );
}

export default Cart;
