import ItemCount from '../../ItemCount'
import { Link } from 'react-router-dom'




const Item = ({nombre, desc, precio, stock, categoria , id}) => {
    
    return ( 
        <div className = 'cardItem'>
            <div className = 'item'>
                <Link to={`/${categoria}/${id}`}>
                <h1>Ice cream</h1>
                <h2>{nombre}</h2>            
                <h3>{desc}</h3>
                <h4>${precio}</h4>
                <ItemCount stock = {stock} />
                </Link>
            </div>
        </div>
     )
}
 
export default Item;

