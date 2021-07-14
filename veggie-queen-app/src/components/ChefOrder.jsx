import React, { useState, useEffect } from "react";
import db from "../firebase/firebase";

const ChefOrder = ({ order }) => {
  const { id, name, table, products } = order;
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [timer, setTimer] = useState("00:00:00");
  const [isActive, setIsActive] = useState(false);
  const [textButton, setTextButton] = useState("Start");

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        let s, m, h, hAux, mAux, sAux;
        s = seconds + 1;
        m = minutes;
        h = hours;

        if (s >= 60) {
          s = 0;
          m++;
        }
        if (m >= 60) {
          m = 0;
          h++;
        }

        setSeconds(s);
        setMinutes(m);
        setHours(h);

        if (s < 10) {
          sAux = "0" + parseInt(s);
        } else {
          sAux = parseInt(s);
        }
        if (m < 10) {
          mAux = "0" + parseInt(m);
        } else {
          mAux = parseInt(m);
        }
        if (h < 10) {
          hAux = "0" + parseInt(h);
        } else {
          hAux = parseInt(h);
        }

        setTimer(hAux + ":" + mAux + ":" + sAux);
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, hours]);

  const preparation = (evt) => {
    evt.preventDefault();
    switch (textButton) {
      case "Start":
        setIsActive(true);
        setTextButton("Finish");
        break;
      case "Finish":
        setIsActive(false);
        setTextButton("Finished");
        db.collection("orders")
          .doc(id)
          .update({
            status: "completed",
            order_time: timer,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        evt.target.style.display = "none";
        evt.target.parentNode.parentNode.parentNode.parentNode.style.display =
          "none";
        break;
      default:
    }
  };

  return (
    <section className="card">
      <section>
        <h5>Customer: {name}</h5>
        <h5>Table: {table}</h5>
        <table>
          <thead>
            <tr>
              <th>Qty</th>
              <th>Product</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td> {product.quantity} </td>
                <td>{product.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr></hr>
        <section>
          <section className="timer">
            <h2 id="timer2">{timer}</h2>
            <button onClick={preparation} className="stopBtn">
              {textButton}
            </button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ChefOrder;
