import React from "react";
import ProductCard from "./ProductCard";

import Novathin from "../assets/Novathin.png";
import Mobile from "../assets/Mobile.png";
import Novawatch from "../assets/Novawatch.png";

function Products() {
  const products = [
    {
      id: 1,
      image: Novathin,
      name: "NOVA thin Pro",
      desc: "Ultra thin laptop with powerful performance.",
      price: "₹1,29,999",
    },
    {
      id: 2,
      image: Mobile,
      name: "NOVA 17 Pro",
      desc: "Beautiful display with pro camera system.",
      price: "₹89,999",
    },
    {
      id: 3,
      image: Novawatch,
      name: "NOVA 3 Ultra Watch",
      desc: "Smart health tracking with premium design.",
      price: "₹39,999",
    },
  ];

  return (
    <section className="section dark-section">
      <p className="small-heading">Featured</p>
      <h2>Premium Products</h2>

      <div className="product-grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            desc={item.desc}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;