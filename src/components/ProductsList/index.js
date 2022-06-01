import Product from "../Product";

function ProductsList({produtos,handleClick}) {
  return (
    <section className="RenderizaProdutos">
      {produtos.map((item, id) => (
        <Product handleClick={handleClick}
          key={id}
          item={item}
        />
      ))}
    </section>
  );
}

export default ProductsList;
