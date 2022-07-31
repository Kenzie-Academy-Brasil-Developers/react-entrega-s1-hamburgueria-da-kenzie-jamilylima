import "./App.css";
import "./reset.css";
import { useState,useEffect  } from "react";
import Header from "./components/header";
import ProductsList from "./components/ProductsList";
import FilterProdutos from "./components/FilterProdutos";
import Carrinho from "./components/Carrinho";
import Cart from "./components/Cart/Cart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"


function App() {
  
  const [produtos, setprodutos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setprodutos(response))
      .catch((err) => console.log(err));
  }, []);

  
  const showProducts = (inputValue) => {
     const filtroBusca = produtos.filter(
        (item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.category.toLowerCase().includes(inputValue.toLowerCase())
     );
     setFilteredProducts(filtroBusca)
  };
      
      
      const handleClick = (productId) => {
        const idExiste = currentSale.find((item) => item.id === productId);
        const addItens = produtos.find((item) => item.id === productId);
      if (addItens !== idExiste) {
        setCurrentSale([...currentSale, addItens]);
       
      } else {
        toast.error('Produto já exite no carrinho')
          }
      };
  
  const RemoveProduto = (remover) => {
    const remove = currentSale.filter((item) => item !== remover);
    toast.success('Produto removido')
    setCurrentSale(remove);
  };

  const RemoveTodosProdutos = (remover) => {
    const remove = currentSale.filter((item) => item === remover);
    toast.success('Todos os produtos foram removidos')
    setCurrentSale(remove);
  };



  return (
    <>
      <header className="cabecalho">
        <Header
          showProducts={showProducts}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </header>

      <main className="main">
       {filteredProducts.length > 0 ? (
          <FilterProdutos filteredProducts={filteredProducts} handleClick={handleClick} />
         
         ) : (
           <ProductsList produtos={produtos} handleClick={handleClick} />
        )}

        <aside>
          {currentSale.length > 0 ? (
            <Cart
              currentSale={currentSale}
              RemoveProduto={RemoveProduto}
              RemoveTodosProdutos={RemoveTodosProdutos}
            />
          ) : (
            <Carrinho />
          )}
        </aside>
        <ToastContainer/>
      </main>
    </>
  );
}

export default App;
