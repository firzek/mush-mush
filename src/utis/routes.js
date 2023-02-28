import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import * as All from '../pages'
import Header from '../components/header/header'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<All.Home />} path="/" exact />
        <Route element={<All.Contato />} path="/contato" />
        <Route element={<All.Shopping />} path="/shopping" />
        <Route element={<All.CreateAccount />} path="/criarconta" />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
