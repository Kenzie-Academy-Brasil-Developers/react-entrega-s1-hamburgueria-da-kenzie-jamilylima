import "./cartProduct.css";

function CartProduct({ item, RemoveProduto }) {
  return (
    <section className="cardCarrinho">
      <figure className="imgCarrinho">
        {" "}
        <img className="imgg" src={item.img} alt="" />{" "}
      </figure>
      <div className="itensCarrinhoo">
        <p className="nomeProdutoCarrinho">{item.name}</p>
        <span className="categoria">{item.category}</span>
      </div>
      <span className="removerDoCarrinho" onClick={() => RemoveProduto(item)}>
        Remover
      </span>
    </section>
  );
}

export default CartProduct;
