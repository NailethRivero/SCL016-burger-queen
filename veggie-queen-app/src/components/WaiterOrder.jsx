import React, { useState, useEffect } from "react";
import db from "../firebase/firebase";
import Order from "./Order";

const Chef = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    db.collection("orders")
      .get()
      .then((snap) => {
        const documents = [];

        snap.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        setOrders(documents.filter((doc) => doc.status === "completed"));
        console.log(documents);
      });
  }, []);

  return (
    <section className="cardsContainer">
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </section>
  );
};

export default Chef;