import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import apiAxios from "../../api"
export default function Home() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await apiAxios.get(`/product`);
        setProducts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="container">
      <div className="home-container">
        <div className="home-row">
          {products.map((product) => {
            return (
              <div className="home-column">
                <div className="product-container">
                  <div className="img-container">
                    <img src={product.image_path}></img>
                  </div>
                  <div className="des-container">
                    <div className="price-container">
                      <div className="title">{product.name}</div>
                      <div className="price">VND {product.price}</div>
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
