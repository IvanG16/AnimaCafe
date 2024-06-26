import FilaCategoria from "../FilaCategoria"
import FilaProductos from "../FilaProducto"

export default function TablaProductos({ Productos }){
    return(
        <table>
            <thead>
                <tr>
                    <th>
                        Nombre
                    </th>
                    <th>
                        Precio
                    </th>
                    <th>
                        Stock
                    </th>
                </tr>
            </thead>
            <tbody>
                {Productos.filter((product, index, self) => index === self.findIndex(p => p.categoria === product.categoria)).map(Producto => <FilaCategoria key={Producto.nombre} Productos={Producto}/>)}
                {Productos.map(Producto => <FilaProductos key={Producto.nombre} Productos={Producto}/>)}
            </tbody>
        </table>
    )
}
