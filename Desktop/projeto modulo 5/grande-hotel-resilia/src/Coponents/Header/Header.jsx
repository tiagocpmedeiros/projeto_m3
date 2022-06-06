import React,{useState} from 'react'
import  {Link} from 'react-router-dom'
import './Header.css'
import logo from '../../Assets/Imagens/logo.png'
const Header = () => {
const[isOpen, setOpen] = useState(false);
  return (

    <header>

      <div className="nav">

        <span className='logo'>
          <img src={logo} alt="logo" />
          {/* Grande Hotel Resília */}
        </span>

        <div className={`navItens ${isOpen && 'open'}`}>
            
            <a className="item">
              <Link to="/" className='item'>Home</Link>
             </a>
            
            <a className="item">
              <Link to="/acomodacoes" className='item'>Quartos</Link>
            </a>
          
            <a className="item">
              <Link to="/Reservas" className='item' >Reservas</Link>
            </a>
            
            <a className="item">
              <Link to="/Contato" className='item'>Contato</Link>
            </a>
        </div>
        <div className={`navToggle ${isOpen && 'open'}` }
         onClick={()=> setOpen(!isOpen)}>
          <div className='bar'></div>
        </div>
      </div>
    </header>

  )
  }


export default Header