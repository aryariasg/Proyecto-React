import ItemCount from '../../ItemCount';



const Item = ({nombre, desc, precio, stock}) => {
    
    return ( 
        <div className = 'cardItem'>
            <div className = 'item'>
                <h1>Ice cream</h1>
                <h2>{nombre}</h2>            
                <h3>{desc}</h3>
                <h4>${precio}</h4>
                <ItemCount stock = {stock} />
            </div>
        </div>

     )
}
 
export default Item;