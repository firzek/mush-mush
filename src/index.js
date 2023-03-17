import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Rotas from './utis/routes'
import { ShoppingCartProvider } from './contexts/shopping-cart-context'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <Rotas />
    </ShoppingCartProvider>
  </React.StrictMode>
)
