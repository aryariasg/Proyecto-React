import React, { useState } from 'react';

export default function ItemCount ({ initial = 0, stock = 0, onAdd = () => {} }){
  const [ userSelected, setUserSelected] = useState (initial)

  const decrement = () => {
    if (userSelected > 1) setUserSelected (userSelected -1)
  }

  const increment = () => {
    if (userSelected < stock) setUserSelected (userSelected +1)
  }



return(
  <>

  <div className = 'itemCount' >
    <button  onClick = {() => decrement()}>-</button>
    <div>{userSelected}</div>
    <button  onClick = {() => increment()}>+</button>
    <div className = 'add' >
    <button onClick = {onAdd}> Argregar al carrito</button>
    </div>
  </div>
  </>

)
}
