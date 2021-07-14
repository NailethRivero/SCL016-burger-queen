import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Products from "./Products";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import db from "../firebase/firebase";
//import "./cart.css";
import '../App.css';

const Cart = ({ cart, setCart }) => {
  const itemsPrice = cart.reduce((a, c) => a + c.quantity * c.price, 0);
  const inputName = useRef();
  const inputTable = useRef();

  const deleteListProduct = (id) => {
    const existProducts = cart.find((product) => product.id === id);
    if (existProducts.quantity === 1) {
      setCart(cart.filter((product) => product.id !== id));
    } else {
      setCart(
        cart.map((product) =>
          product.id === id
            ? { ...existProducts, quantity: existProducts.quantity - 1 }
            : product
        )
      );
    }
  };

  const sendOrder = (evt) => {
    evt.preventDefault();
    let order = {};
    order.name = inputName.current.value || "No Name";
    order.table = inputTable.current.value;
    order.products = cart;
    order.created_at = new Date();
    order.status = "pending";

    db.collection("orders")
      .add(order)
      .then(() => {
        inputName.current.value = "";
        inputTable.current.value = "";
        setCart([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cancelOrder = (evt) => {
    evt.preventDefault();
    inputName.current.value = "";
    inputTable.current.value = "";
    setCart([]);
  };

  return (
    <section>
      <section>
        <h1 className="order">Order</h1>
        <form type="submit" action="">
          <span>Customer:</span>
          <input type="text" ref={inputName} />
          <br></br>
          <span>Table:</span>
          <input type="number" min="1" max="10" ref={inputTable} />
          <section className="table">
            <section className="thead">
              <ul className="tr">
                <li>Qty</li>
                <li>Product</li>
                <li>Price</li>
                <li>Delete</li>
              </ul>
            </section>
            <hr />
            {cart.length === 0 ? (
              <span>Cart Is Empty</span>
            ) : (
              cart.map((product) => (
                <section className="tbody" key={product.id}>
                  <ul className="tr">
                    <li className="li"> {product.quantity} </li>
                    <li className="li">
                      <Products
                        key={product.id}
                        product={product}
                        cart={cart}
                        setCart={setCart}
                      />
                    </li>
                    <li className="li"> ${product.price}</li>
                    <li className="li">
                      <FontAwesomeIcon
                        className="iconTrash"
                        icon={faTrash}
                        onClick={() => deleteListProduct(product.id)}
                      />
                    </li>
                  </ul>
                </section>
              ))
            )}
          </section>
          <hr></hr>
          <section className="tfoot">
            <p className="result"></p>
            <p colSpan="2"> Total</p>
            <p>
              {" "}
              <strong>${parseFloat(itemsPrice).toFixed(2)}</strong>{" "}
            </p>
          </section>
          <hr></hr>
          <button onClick={cancelOrder} className="cancelBtn">
            Cancel
          </button>
          <button onClick={sendOrder} className="sendBtn">
            Send
          </button>
        </form>
      </section>
    </section>
  );
};

export default Cart;
