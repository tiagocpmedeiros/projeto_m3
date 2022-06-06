import React from 'react'
import {BrowserRouter, Route, Routes as Switch} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Acomodacoes from '../Pages/Acomodacoes/Acomodocoes'
import Reservas from '../Pages/Reservas/Reservas'
import Contato from '../Pages/Contato/Contato'
import Header from '../Coponents/Header/Header'
import Footer from '../Coponents/Footer/Footer'

const Routes = () => {
  return (

    <BrowserRouter>
    
    <Header />
   
    {/* conteudo estatico */}
    <Switch>
    {/* conteudo dinamico */}
   <Route path='/' element={<Home/>}/>
    <Route path='/reservas' element={<Reservas/>}/>
    <Route path='/acomodacoes' element={<Acomodacoes/>}/>
    <Route path='/contato' element={<Contato/>}/>
    </Switch>
    <Footer />
    </BrowserRouter>
  )
}

export default Routes