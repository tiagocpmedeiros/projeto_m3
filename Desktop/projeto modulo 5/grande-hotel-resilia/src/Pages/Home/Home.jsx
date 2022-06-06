import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Carrossel from './Carrossel/Carrossel'
import luxo from '../../Assets/Imagens/luxo.png'
import superLuxo from '../../Assets/Imagens/superluxo.png'
import master from '../../Assets/Imagens/master.jpeg'


function Home() {
  return (
    <main>
      <section className='sessao-hotel'>
        <h1 className='txt-acomodacoes'> Grande Hotel Resília</h1>    
          <div className='div-carrossel'>    
            <Carrossel /> 
          <article className='txt-carrossel'>
            <h2 className='titulo-hotel'>Hotel</h2>
            <p>Bem vindo ao Grande Hotel Resilia. Com uma estrutra completa, nosso hotel é perfeito para receber desde eventos coorporativos, até suas férias familiares.
            </p>
            <p>  O hotel disponibiliza uma piscina exterior, um spa e um centro de fitness.
            </p>
            
            <p>
                Venha viver uma experiência única no hotel de luxo mais incrível da região. Preparado para seus melhores momentos.
            </p>
          </article>
        </div>
      </section>  

<section className='sessao-acomodacao'>

<h1 className='txt-acomodacoes'> Nossas Acomodações</h1>

    <div className='acomodacoes'>
    
      <div className='container-suite'>
      <div className='txtImg1' >
              <Link to="/acomodacoes"className='txtImg' >SUÍTES LUXO</Link>
      </div>

      <img src={luxo} className='suite' />
            </div>

      <div className='container-suite'>
      <div className='txtImg1'>
              <Link to="/acomodacoes"className='txtImg' >SUÍTES SUPER LUXO</Link>
      </div>

      <img src={superLuxo} className='suite'/>
      
      </div>

      <div className='container-suite'>
      <div className='txtImg1'>
              <Link to="/acomodacoes"className='txtImg' >SUÍTES MASTER</Link>
      </div>
      <img src={master} className='suite'/>
     
      </div>

    </div>
    </section>
  

    <section className='sessao-mapa'>
    <h1 className='txt-acomodacoes'> Nossa Localização</h1>

    <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.8304772016954!2d-43.19493618448239!3d-22.956469545418315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fe05c4bc9bb%3A0x1274b5374c6b25c8!2sR.%20Hans%20Staden%2C%2020%20-%20Botafogo%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022281-060!5e0!3m2!1spt-BR!2sbr!4v1654455050145!5m2!1spt-BR!2sbr">

    </iframe>
    </section>
    
    </main>
  )
}

export default Home