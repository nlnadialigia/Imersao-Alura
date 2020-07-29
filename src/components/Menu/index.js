import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'



function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="Logo da StarDevFlix" className="Logo"/>
            </a>
            <Button as="a" href="/cadastro/Video" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu