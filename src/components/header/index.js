
import { useEffect } from "react";
import Logo from "./Logo.png";

function Header({ showProducts, inputValue, setInputValue }) {
  
  useEffect(() => {
    showProducts(inputValue)
    }, [inputValue]);

  return (
    <>
      <div className="Logo">
        <img src={Logo} alt="" />
      </div>

      <div className="pesquisa">
        <input
          className="inputDescricao"
          type="text"
          placeholder="Digite aqui sua descrição"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        ></input>

        <button
          className="btnPesquisar" 
          type="submit"
          onClick={()=> showProducts(inputValue)}
          >
        Pesquisar
        </button>
      </div>
    </>
  );
}


export default Header;
