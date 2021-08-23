import NavBar from './NavBar'
import ItemList from './ItemList/ItemList'



const ItemListContainer = (props) => {

    return(
        <> 
         <NavBar/>
            <div className = 'itemListContainer'>
             <h1>{props.titulo}</h1>
             <h2>{props.subtitulo}</h2>
             <img src='./image/icecream2-contact-pic1.png' alt='' />
            </div>
            <ItemList/>
        </>
    )
}

export default ItemListContainer