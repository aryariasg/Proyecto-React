import './scss/app.scss'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import ItemList from './components/ItemList/ItemList';



function App() {
  return (

    //se envuelve todo en el browser para rendderizar los componentes
    <BrowserRouter>
      <div className = 'app'>
        <NavBar/>
        <Switch>
          <Route path="/">
            <ItemListContainer titulo ='100% Productos' subtitulo = 'Naturales' />
          </Route>
          <Route path="/:categoria/" exact>
            <ItemList titulo='helados' subtitulo='Sabores colores' />
          </Route>
          <Route path="/:categoria/:id" exact>
            <ItemDetailContainer titulo='helados' subtitulo='Sabores' />
          </Route>
        </Switch>
      </div> 
    </BrowserRouter>
  );
}

export default App;
