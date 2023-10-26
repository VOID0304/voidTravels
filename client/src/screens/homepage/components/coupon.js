import React from "react";

const Coupon = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-around m-5 coupon">
        <h3 className="text-white">
          USE THIS PROMO CODE FOR AVAILING OFFERS.{" "}
        </h3>
        <button className="btn coupon-button">Coupon Code: VOID 23 </button>
      </div>
    </>
  );
};
export default Coupon;