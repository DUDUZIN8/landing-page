import React, { useState, useEffect } from 'react';
import MyLogo from '../../assets/img/mylogo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './header.css';
import { BrowserRouter as Router } from 'react-router-dom';

export const Header = () => {
   const [activeLink, setActiveLink] = useState('home');
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
    const onScroll = () => {
        if (window.screenY > 50){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
   }, []);

   const linkActive = (value) => {
    setActiveLink(value);
   }

   return(
    <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                <img src={MyLogo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href="#products" className={activeLink === 'products' ? 'active navbar-link' : 'navbar-link'} onClick={() => linkActive('products')}>Nossos Produtos</Nav.Link>
                        <Nav.Link href="#beneficies" className={activeLink === 'beneficies' ? 'active navbar-link' : 'navbar-link'} onClick={() => linkActive('beneficies')}>Beneficios</Nav.Link>
                        <Nav.Link href="#depoiments" className={activeLink === 'depoiments' ? 'active navbar-link' : 'navbar-link'} onClick={() => linkActive('depoiments')}>Depoimentos</Nav.Link>
                        <Nav.Link href="#orcamento" className={activeLink === 'orcamento' ? 'active navbar-link' : 'navbar-link'} onClick={() => linkActive('orcamento')}>Solicitar Orçamento</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Router>
   )
}