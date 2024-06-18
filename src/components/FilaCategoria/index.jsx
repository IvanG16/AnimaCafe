export default function FilaCategoria( { Productos } ){
    const categorias = [] = new Set();
    Productos.map(Producto => {
        if (!categorias.has(Producto.categoria)) {
            categorias.add(Producto.categoria);
        }
    })

    return(
        <>
            {categorias}
        </>
    )
}
