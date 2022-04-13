import React, { useState, useEffect } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  getTotals,
  clearCart
} from "../../redux/cart/cartSlice";
import { API, endpoints } from "../../common/api";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function Cart() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartState);
  const user = useSelector((state) => state.loginState);

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handlePay = async () => {
    API.post(endpoints["pay"], {
      id_user: user.user.id,
      total_price: cart.cartTotalAmound,
    }).then((res) => {
      console.info(res.data.data);
    });
    dispatch(clearCart());
    setOpen(true);
  };
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

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
                <div className="amount-adjusted">
                  <div className="amount-adjusted-child">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <input value={cartItem.cartQuantity}></input>
                    <button onClick={() => handleIncreaseCart(cartItem)}>
                      +
                    </button>
                  </div>
                </div>
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
        <h2>Tổng thanh toán: $ {cart.cartTotalAmound}</h2>
        <div className={classes.root}>
          <button onClick={handlePay}>Pay</button>
        </div>

        <Link to="/">
          <button className="btn-other-product">Mua thêm sản phẩm</button>
        </Link>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Mua thành công
        </Alert>
      </Snackbar>
    </div>
  );
}
