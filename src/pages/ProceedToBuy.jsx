import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase";
import Navbar from "../components/Navbar";

function ProceedToBuy() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  async function fetchProduct() {
    const { data, error } = await supabase
      .from("cart")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.log(error);
    } else {
      setProduct(data);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!product) {
    return (
      <>
        <Navbar />
        <section className="buy-page">
          <h1>Loading...</h1>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="buy-page">
        <h1>Proceed To Buy</h1>

        <div className="buy-card">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button>Place Order</button>
        </div>
      </section>
    </>
  );
}

export default ProceedToBuy;