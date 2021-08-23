import ItemCount from '../../itemCount/ItemCount.js'

const ItemDetail = ({nombre, desc, precio, stock, imagen})  =>{
    return (
        <div className='item'>
            <h2>Componente DETAIL</h2>
            <h2>{nombre}</h2>
            <h3>{desc}</h3>
            <h4>${precio}</h4>
            <img style={{width:"60%"}} src={imagen} alt={nombre} />
            <ItemCount stock={stock} />
        </div>

    )
}

export default ItemDetail