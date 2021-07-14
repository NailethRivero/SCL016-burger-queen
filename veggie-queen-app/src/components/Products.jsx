import React from "react";
import '../App.css';

const Products = ({ product, cart, setCart, Products }) => {
  const { id, name, price } = product;

  const addListProduct = () => {
    const existProduct = cart.find((products) => products.id === product.id);
    if (existProduct) {
      setCart(
        cart.map((products) =>
          products.id === product.id ? { ...existProduct, quantity: existProduct.quantity + 1 } : products
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  return (
    <section className="containerCards">
      <div className="contentCards">
        {Products ? ((<div className="previewCards"></div>))
          : (<></>)}
        <div className="infoCards">
          <section>{name}</section>
          {Products ? ((<section>${price}</section>))
            : (<></>)}
          {Products ? ((<button className='btnAdd' type="button" onClick={() => addListProduct(id)}>Add</button>))
            : (<></>)}
        </div>
      </div>
    </section>
  )
};

export default Products;