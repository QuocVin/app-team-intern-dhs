import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
export default function Home() {
  const products = [
    {
      id: "1",
      name: "Iphone 13",
      branch: "Apple",
      price: "15000000",
      quantity: "10",
      img: "",
    },
    {
      id: "2",
      name: "Samsung Galaxy S20",
      branch: "Samsung",
      price: "15000000",
      quantity: "10",
      img: "",
    },
    {
      id: "3",
      name: "Sony Xperia X Mark III",
      branch: "Sony",
      price: "12000000",
      quantity: "5",
      img: "",
    },
    {
      id: "4",
      name: "Xiaomi Redmi Note 10",
      branch: "Xiaomi",
      price: "8000000",
      quantity: "10",
      img: "",
    },
    {
      id: "5",
      name: "Huawei Mate 30 Pro",
      branch: "Huawei",
      price: "10000000",
      quantity: "5",
      img: "",
    },
    {
      id: "6",
      name: "Google Pixel 6",
      branch: "Google",
      price: "13000000",
      quantity: "3",
      img: "",
    },
  ];

  return (
    <div className="container">
      <div className="home-container">
        <div className="home-row">
          {products.map((product) => {
            return (
              <div className="home-column">
                <div className="product-container">
                  <div className="img-container">
                    <img src={product.img}></img>
                  </div>
                  <div className="des-container">
                    <div className="price-container">
                      <div className="title">{product.name}</div>
                      <div className="price">${product.price}</div>
                    </div>
                    <div className="buy-container">
                      <Link to= {`/ProductDetail/${product.id}`}>
                        <button>Buy Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
