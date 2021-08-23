import React from "react";
import './scss/app.scss'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    <>
      <ItemListContainer titulo ='100% Productos' subtitulo = 'Naturales' />
      <ItemCount initial = {1}stock = {30} onAdd = {() => console.log ('Se agrego al carrito') } />
      <ItemDetailContainer titulo='Juegos' subtitulo='Tienda consolas retro' />
    </>
  );
}

export default App;
