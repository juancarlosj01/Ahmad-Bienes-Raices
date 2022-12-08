import React from 'react'
import './NavBar.css'
import fulldev from '../../assets/fulldevlatam2.png'
const NavBar = () => {
  return (
    <div className='navBar'>
      <div className='list'>
       {/* <div id='logo'> <img src={fulldev} alt="" /></div> */}
        <ul>
          <li id='inicio'>Inicio</li>
          <li>Agentes</li>
          <li>Contacto</li>
          <li>Reserva online</li>
        </ul>
        
      </div>
    </div>
  )
}

export default NavBar

// https://github.com/juancarlosj01/Ahmad-Bienes-Raices.git