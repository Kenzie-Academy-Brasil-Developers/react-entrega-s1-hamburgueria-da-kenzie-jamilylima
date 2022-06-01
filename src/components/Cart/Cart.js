import CartProduct from "../CartProduct/CartProduct";

function Cart({ item, currentSale, RemoveProduto, RemoveTodosProdutos }) {
  
  const valorTotal = currentSale.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price +  valorAnterior
  }, 0);


  return (
    <section className="carrinhoComProduto">
      <p className="carrinhoCompras">Carrinho de Compras</p>
      <div className="carrinhoProdutos">
        {currentSale.map((item, id) => (
          <CartProduct key={id} item={item} RemoveProduto={RemoveProduto} />
        ))}
      </div>

      <section className="valorCompra">
        <span className="totalValores">
          <p className="total">Total</p>
          <span className="totaldaCompra">R${valorTotal.toFixed(2)}</span>
        </span>
        <button className="removerTodos" onClick={() =>RemoveTodosProdutos(item)}>Remover todos </button>
      </section>
    </section>
  );
}

export default Cart;
