import React, { useState, useEffect } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  dispatchMinusQuantity,
  dispatchPlusQuantity,
} from "../../redux/actions/cartAction";
export default function Cart() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  //   const cart = useSelector((state) => state.cart)

  const AddAmount = (e) => {
    const index = e.target.id;
    dispatch(dispatchPlusQuantity(index));
  };
  const ReduceAmount = (e) => {
    const index = e.target.id;
    console.log(index);
    dispatch(dispatchMinusQuantity(index));
  };
  const products = [
    {
      id: "1",
      name: "Iphone 13",
      branch: "Apple",
      price: "15000000",
      quantity: "10",
      img: "https://cdn.tgdd.vn/Products/Images/42/274097/iphone-13-mini-xanh-la-thumb-2-600x600.jpg",
    },
    {
      id: "2",
      name: "Samsung Galaxy S20",
      branch: "Samsung",
      price: "15000000",
      quantity: "10",
      img: "https://cdn.tgdd.vn/Products/Images/42/274097/iphone-13-mini-xanh-la-thumb-2-600x600.jpg",
    },
  ];
  return (
    <div className="cart-container">
      <div className="products-container">
        {products.map((product, index) => {
          return (
            <div className="product-container">
              <div className="img-container">
                <img src={product.img}></img>
              </div>
              <div className="info-container">
                <div className="product-name">{product.name}</div>
                <div className="product-price">VND: {product.price}</div>
                <div className="amount-adjusted">
                  <div className="amount-adjusted-child">
                    <button id = {index} onClick={ReduceAmount}>-</button>
                  </div>
                  <div className="amount-adjusted-child">
                    <input value={product.quantity}></input>
                  </div>
                  <div className="amount-adjusted-child">
                    <button id = {index} onClick={AddAmount}>+</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div class="pay-container">
        <h2>Tổng thanh toán:</h2>
        <button>Pay</button>
        <button className = "btn-other-product">Mua thêm sản phẩm</button>
      </div>
    </div>
  );
}
