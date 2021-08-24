import React from "react";
import './scss/app.scss'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";



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
          <Route path="/" exact>
            <ItemCount initial = {1}stock = {30} onAdd = {() => console.log ('Se agrego al carrito') } />
          </Route>
          <Route path="/:categoria /:id" exact>
            <ItemDetailContainer titulo='Beicecream' subtitulo='Sabores' />
          </Route>
        </Switch>
      </div> 
    </BrowserRouter>
  );
}

export default App;
