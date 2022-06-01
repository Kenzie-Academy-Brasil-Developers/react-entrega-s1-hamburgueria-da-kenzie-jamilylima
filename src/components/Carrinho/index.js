import "./cart.css";

function Carrinho() {
  return (
       <section className="carrinho">
          <p className="carrinhoCompras">Carrinho de Compras</p>
          <div className="carrinhoVazio">
            <p className="sacolaVazia">Sua sacola está vazia</p>
            <p className="addItens">Adicione itens</p>
          </div>
        </section> 
  );
}

export default Carrinho;
