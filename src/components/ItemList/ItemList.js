import data from '../../data/data'
import Item from './Item/Item'
import React, {useState, useEffect}  from 'react'
import { useParams } from 'react-router-dom'


const ItemList = ()=>{

    const { categoria } =useParams()
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        const productos = () => {
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(data)
                },2000)
            })
        }
        productos().then((items)=>{
            if(categoria != null){
                const productosFiltrados=items.filter((producto)=>producto.categoria===categoria)
                setProductos(productosFiltrados)
                setCargando(false)
            } else {
                setProductos(items)
                setCargando(false)
            }
        })
    },[categoria])


    return(
        <>
        {cargando ? <h2>Cargando..</h2> : 
        productos.map((producto)=>
            <Item key={producto.id} nombre={producto.nombre} desc={producto.desc} precio={producto.precio} stock={producto.stock} categoria={producto.categoria} id={producto.id} />
        )
        }
        </>

    )
}

export default ItemList