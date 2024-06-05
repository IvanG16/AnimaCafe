import { useState } from 'react'
import {productos} from "./CafeInfo/productos"
import './App.css'

function App() {

  return (
    <>
      <h1>Anima</h1>
      <TablaProductos productos={productos}/>
    </>
  )
}

export default App
