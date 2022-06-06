import React from 'react'
import './Footer.css'
import logo from '../../Assets/Imagens/logog.png'
import { Link } from 'react-router-dom'
import insta from '../../Assets/Imagens/insta.png'
import facebook from '../../Assets/Imagens/facebook.png'
import tripadvisor from '../../Assets/Imagens/tripadvisor.png'
function Footer() {

  return (
    <footer className='rodape'>

      <section className='logo1'>
          <img src={logo} alt="logo-footer" className='logo-footer' />
          {/* Grande Hotel Resília */}
        </section>
      
      <section className='reserve-conteiner'>

        <ul className='reserve-aqui'>
        <li>
          reservas@grandehotelresilia.com.br
        </li>
        <li>
          Telefone:+55 (21) 3322-0011
        </li>
        <li>
          Whatsapp: (21) 3322-1100
        </li>
        
          <button className="botao-reserva">
              <Link to="/Reservas" className='botao-link' >Reserve Online</Link>
        </button>
        </ul>
        </section>
        <section className='rede-social'>
            <a href='https://www.instagram.com/' className='social'>
              <img src={insta} alt="" className='social'/>
            </a>
            <a href='https://pt-br.facebook.com/' className='social'>
              <img src={facebook} alt="" className='social'/>
            </a>
            <a href='https://www.tripadvisor.com.br/' className='social'>
              <img src={tripadvisor} alt="" className='social'/>
            </a>
        </section>
        
       
        
    </footer>
  )
}

export default Footer