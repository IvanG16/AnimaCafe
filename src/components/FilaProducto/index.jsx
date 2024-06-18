export default function FilaProductos( { Productos } ){
    const productosFiltrados = Productos.map(Producto => <li>{Producto.stock > 0 ? Producto.nombre : <s>{Producto.nombre}</s>} {Producto.precio} {Producto.stock}</li>)
    
    return(
        <>
            {productosFiltrados}
        </>
    )
}
