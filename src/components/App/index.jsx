import { useState } from 'react'
import Productos from "../../CafeInfo/productos"
import TablaProductos from '../TablaProductos'
import './index.css'

function App() {

  return (
    <>
      <h1>Anima</h1>
      <TablaProductos Productos = { Productos }/>
    </>
  )
}

export default App
