import "./produto.css";

function Product({ item, handleClick }) {
  return (
    <section className="card">
      <figure>
        <img className="imgProduct" src={item.img} alt="" />
      </figure>
      <p className="nomeProduto">{item.name}</p>
      <span className="categoria">{item.category}</span>

      <span className="preco">R$ {item.price.toFixed(2)}</span>

      <button
        className="btnComprar"
        type="submit"
        onClick={() => handleClick(item.id)}
      >
        Adicionar
      </button>
    </section>
  );
}

export default Product;
