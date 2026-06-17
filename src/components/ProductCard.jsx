import { supabase } from "../supabase";

function ProductCard({ id, image, name, price, desc }) {
  async function addToCart() {
    const { error } = await supabase.from("cart").insert([
      {
        product_id: id,
        name: name,
        price: price,
        image: image,
      },
    ]);

    if (error) {
      console.log(error);
      alert("Product not added");
    } else {
      alert("Added to Cart");
    }
  }

  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <div className="product-info">
        <h3>{name}</h3>
        <p>{desc}</p>
        <h4>{price}</h4>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;