import React, { useState, useEffect } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../redux/cart/cartSlice";
export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartState);
  // const AddAmount = (e) => {
  // const index = e.target.id;
  //   dispatch(dispatchPlusQuantity(index));
  // };
  // const ReduceAmount = (e) => {
  //   const index = e.target.id;
  //   console.log(index);
  //   dispatch(dispatchMinusQuantity(index));
  // };
  const handleChangeInput = (e, id) => {};
  const handlePay = () => {};
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  return (
    <div className="cart-container">
      <div className="products-container">
        {cart?.cartItems?.map((cartItem) => {
          return (
            <div className="product-container" key={cartItem.id}>
              <div className="img-container">
                <img src={cartItem.image_path}></img>
              </div>
              <div className="info-container">
                <div className="product-name">{cartItem.name}</div>
                <div className="product-price">$: {cartItem.price}</div>
              </div>
              <div className="del-container">
                <button
                  className="del-button"
                  onClick={() => handleRemoveFromCart(cartItem)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div class="pay-container">
        <h2>Tổng thanh toán:</h2>
        <button onClick={handlePay}>Pay</button>
        <Link to="/">
          <button className="btn-other-product">Mua thêm sản phẩm</button>
        </Link>
      </div>
    </div>
  );
}
