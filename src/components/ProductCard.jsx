function ProductCard({ image, name, price, desc }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <div className="product-info">
        <h3>{name}</h3>
        <p>{desc}</p>
        <h4>{price}</h4>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;