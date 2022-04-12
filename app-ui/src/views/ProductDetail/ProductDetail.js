import { useParams,useHistory,  Link } from "react-router-dom";
import React, { useEffect, useState  } from "react";
import "./ProductDetail.css";
import apiAxios from "../../api";
import { endpoints, API } from "../../common/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await API.get(`/product/detail/${id}`);
        setProduct(res.data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleAddCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="product-detail-container">
      <div className="product-img-container">
        <img src={product[0]?.image_path}></img>
      </div>
      <div className="product-description-container">
        <h1>{product[0]?.name}</h1>
        <h2>{product[0]?.price}</h2>
        <p>{product[0]?.description}</p>
        <div className="btn-add-to-cart">
          <Link to="/cart">
            <button onClick={() => handleAddCart(product[0])}>Add to CART</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
