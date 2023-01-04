import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {Layout, Home, About, Logements, NotFound} from '../../pages/Public'
import data from '../../datas/appartement.json';

const PublicRouter = () => {
  return (
    <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logements/:id" element={<Logements/>} />
            
            <Route path="*" element={<NotFound />} />
          </Route>
    </Routes>
  )
}

export default PublicRouter