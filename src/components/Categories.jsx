function Categories() {
  const categories = ["Laptops", "Phones", "Watches", "Accessories"];

  return (
    <section className="section">
      <p className="small-heading">Explore</p>
      <h2>Shop by Category</h2>

      <div className="category-grid">
        {categories.map((item) => (
          <div className="category-card" key={item}>
            <h3>{item}</h3>
            <p>Premium quality products</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;