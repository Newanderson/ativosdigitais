import Cards from "./componets/Cards";
import Home from "./componets/Home";
import Navbar from "./componets/Navbar";
import Redes from "./componets/Redes";
import Secao from "./componets/Secao";
import Secao2 from "./componets/Secao2";



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Secao/>
     <Cards/>
     <Secao2/>
     <Redes/>
    </div>
  );
}

export default App;
