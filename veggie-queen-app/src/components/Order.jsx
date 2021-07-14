import React from "react";
import db from "../firebase/firebase";

const ChefOrder = ({ order }) => {
  const { id, name, table, products, order_time } = order;

  async function finish(evt) {
    evt.preventDefault();
    evt.target.style.display = "none";
    evt.target.parentNode.parentNode.parentNode.parentNode.style.display =
      "none";
    await db.collection("orders").doc(id).update({
      status: "delivered",
    });
  }


  return (
    <section className="card">
      <section id={id}>
        <h5>Customer: {name}</h5>
        <h5>Table: {table}</h5>
        <table>
          <thead>
            <tr>
              <th>Qty</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td> {product.quantity} </td>
                <td>{product.name}</td>
                <td>{product.table}</td>
                <td> ${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr></hr>
        <section>
          <section className="time">
            <span>Preparation time:</span>
            <span>{order_time}</span>
          </section>
          <section className="temporize">
            <button onClick={finish} className="stopBtn" title="stopBtn">
              Delivered
            </button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ChefOrder;