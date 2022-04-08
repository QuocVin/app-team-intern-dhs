import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import apiAxios from "../../api";
export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await apiAxios.get(`/ProductDetail/${id}`);
        console.log(res.data);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="product-detail-container">
      <div className="product-img-container">
        <img src="https://cdn.tgdd.vn/Products/Images/42/271697/Galaxy-S22-Ultra-Green-600x600.jpg"></img>
      </div>
      <div className="product-description-container">
        <h1>Samsung Galaxy S22 Ultra 5G</h1>
        <h2>15000000 VND</h2>
        <p>
          A document is a form of information . A document can be put into an
          electronic form and stored in a computer as one or more file s. Often
          a single document becomes a single file. An entire document or
          individual parts may be treated as individual data items. As files or
          data, a document may be part of a database . When using certain
          computer application programs such as a word processor , a document is
          the unit of saved work. Each document is saved as a uniquely named
          file. In the computer industry, documentation is the information
          provided to a customer or other users about a product or the process
          of preparing it.
        </p>
        <div className="btn-add-to-cart">
          <Link to="/cart">
            <button>Add to CART</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
