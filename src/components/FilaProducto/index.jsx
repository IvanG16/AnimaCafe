export default function FilaProductos( { Productos } ){
    return(
        <tr>
            <td>
                {Productos.nombre}
            </td>
            <td>
                {Productos.precio}
            </td>
            <td>
                {Productos.stock}
            </td>
        </tr>
    )
}
