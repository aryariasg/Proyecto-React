import data from '../../data/data'
import ItemDetail from './ItemDetail/ItemDetail'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    const { categoria, id} = useParams ()

    useEffect (() => {
        const productos = () => {
            return new Promise((resolve, reject)=>{
                setTimeout(() => {
                    resolve(data)
                },8000)
            })
        }
        productos().then((items) => {
            const producto = items.find(producto => producto.id === id)
            setProducto(producto)
            setCargando(false)
        })
    },[categoria])


    return(
        <>
        {cargando ? <h2>CARGAN...</h2> : 
            <ItemDetail nombre = {producto.nombre} desc={producto.desc} precio={producto.precio} stock={producto.stock} imagen={producto.imagen} />
        }
        </>

    )
}

export default ItemDetailContainer