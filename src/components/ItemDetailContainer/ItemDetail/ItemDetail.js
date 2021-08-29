import ItemCount from '../../ItemCount'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';

const ItemDetail = ({nombre, desc, precio, stock, imagen, categoria, id})  =>{

    const [itemCountVisible, setItemCountVisible] = useState(true);
    const [buyButtonsVisibility, setBuyButtonsVisibility] = useState(true);
    const [itemsCount, setItemsCount] = useState(0);
  
    const onAdd = count => {
      setItemsCount(count);
    };
  
    const onAddToCart = () => {
      setItemCountVisible(false);
      setBuyButtonsVisibility(false);
    };
  
    const onBuy = () => {
      setItemCountVisible(false);
      setBuyButtonsVisibility(false);
    };
  




    return (
        <div className='item'>
        <Link to={`/${categoria}/${id}`}>
            <h2>{nombre}</h2>
            <h3>{desc}</h3>
            <h4>${precio}</h4>
            {itemCountVisible && <ItemCount onAdd={onAdd} />}
            <img style={{width:"15%"}} src={imagen} alt={nombre} />
            <ItemCount stock={stock} />
            {buyButtonsVisibility && (
        <>
          <button onClick={onAddToCart}>Agregar al carrito</button>
          <button onClick={onBuy}>Comprar</button>
        </>
      )}
            {itemsCount}
      
            </Link>
        </div>

    )
}

export default ItemDetail