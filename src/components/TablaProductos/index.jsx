import FilaCategoria from "../FilaCategoria"
import FilaProductos from "../FilaProducto"

export default function TablaProductos({ Productos }){
    return(
        <>
            <h3>Nombre  Precio  Stock</h3>
            {<FilaCategoria Productos={ Productos }/> ?? ''}
            <ul>
                <FilaProductos Productos={ Productos }/>
            </ul>
        </>
    )
}
