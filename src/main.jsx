import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './pages/404'
import { Pokemon } from './pages/Pokemon'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'pokedex/:pokemonId',
      element: <Pokemon />,
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
