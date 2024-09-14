import React, { useState } from 'react';
import './navbar.css';
import Logo from '../../assets/images/logo.png';
import contactimg from '../../assets/images/contact.png';
import Menu from '../../assets/images/menu.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);


  return (
    <nav className='navbar'>
    <img src={Logo} alt='logo' className='logo'/>
    <div className='desktopMenu'>
        <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>About Me</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>Portfolio</Link>
        <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Clients </Link>

  </div>
  <button className='desktopMenuBtn' onClick={() =>{
      document.getElementById("contact").scrollIntoView({behavior:'smooth'});

    }}>
        <img src={ contactimg}alt='' className='desktopMenuImg'/>Contact Arun </button>

        <img src={Menu} alt='Menu' className='mobMenu'  onClick={()=> setShowMenu(!showMenu)}/>
    <div className='navMenu' style={ {display: showMenu? 'flex':'none'}}>
        <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=> setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}  className='ListItem'  onClick={()=> setShowMenu(false)}>About Me</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}  className='ListItem'  onClick={()=> setShowMenu(false)}>Portfolio</Link>
        <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'  onClick={()=> setShowMenu(false)}>Clients </Link>
        <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'  onClick={()=> setShowMenu(false)}>Contact </Link>
        

  </div>



</nav>  )
}

export default Navbar