import Product from "../Product";

function FilterProdutos({handleClick, filteredProducts}) {
  return (
    <section className="RenderizaProdutos">
      {filteredProducts.map((item, id) => (
        <Product handleClick={handleClick}
          key={id}
          item={item}
        />
      ))}
    </section>
  );
}

export default FilterProdutos;