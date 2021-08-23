import data from '../../data/data'
import ItemDetail from '../../ItemDetail.js'
import React, {useState, useEffect} from 'react'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)



    useEffect (() => {
        const productos = () => {
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(data)
                },4000)
            })
        }
        productos().then((items)=>{
            const producto = items.find(producto => producto.id ===id)
            setProducto(producto)
            setCargando(false)
        })
    },[])


    return(
        <>
        {cargando ? <h2>CARGANDO PRODUCTO...</h2> : 
            <ItemDetail nombre={producto.nombre} desc={producto.desc} precio={producto.precio} stock={producto.stock} imagen={producto.imagen} />
        }
        </>

    )
}

export default ItemDetailContainer