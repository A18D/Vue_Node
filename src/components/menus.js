import React, { PureComponent } from 'react'
import HomeIcon from 'react-icons/lib/fa/home'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const MainMenu = () =>
    <Navbar fluid collapseOnSelect className="navbar-green">
        <Navbar.Header>
            <Navbar.Brand>
                <div className="container-Logo">

                    <LinkContainer to="/" className="container-Logo">
                        <NavItem className="linkLogo">
                            <img src="./src/images/imgLogo.jpg"
                                alt="логотип" width="40" height="40" /> iSMART
                        </NavItem>
                    </LinkContainer>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <LinkContainer to="/Training" >
                    <NavItem className="navbarborder">Обучение</NavItem>
                </LinkContainer>
                <LinkContainer to="/AboutProject" >
                    <NavItem className="navbarborder">О проекте</NavItem>
                </LinkContainer>
                <LinkContainer to="/Blog" >
                    <NavItem className="navbarborder">Блог</NavItem>
                </LinkContainer>
                <LinkContainer to="/Webinar" >
                    <NavItem className="navbarborder">Вебинар</NavItem>
                </LinkContainer>
                <NavItem eventKey={3} href="#" className="navbarborder">
                    Диагностика
                </NavItem>
            </Nav>
            <LinkContainer to="/Search" >
                <div >
                    <form class="navbar-form navbar-left " role="search">
                        <button class=" btn btn-default navbar-MyBtn" ><span class="glyphicon glyphicon-search"></span></button>
                    </form>
                </div>
            </LinkContainer>
            <Nav pullRight>
                <NavItem eventKey={1} href="#" className="navbarborder">
                    Вход
                </NavItem>
                <NavItem eventKey={2} href="#" className="navbarborderReg">
                    Регистрация
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

export const AboutMenu = ({ match }) =>
    <div >
        <Navbar fluid className="navbar-groupGrey">
            <Navbar.Toggle />

            <Navbar.Collapse className="navbar-groupGrey">
                <Nav>
                    <LinkContainer to="/Training/begin" >
                        <NavItem>С чего начать</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/Training/rewards" >
                        <NavItem>Награды</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
