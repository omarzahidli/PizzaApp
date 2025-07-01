import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink } from "react-router"
import { BsCart4 } from "react-icons/bs"
import { useContext } from "react"
import { DataContext } from "../provider/context"

function Header() {
    const {basket, setShow} = useContext(DataContext) 

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top">
                <Container>
                    <Link to="/" className="navbar-brand">
                        <img id="logo" src="./assets/img/logo.png" alt="Pizza logo" />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/main">Ana səhifə</NavLink>
                        <NavLink className="nav-link" to="/menu">Menyu</NavLink>
                        <NavLink className="nav-link" to="/contact">Əlaqə</NavLink>
                    </Nav>
                    <Nav>
                        <div onClick={() => setShow(true)} className="position-relative d-flex align-items-center">
                            <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
                                {basket?.length}
                            </span>
                            <BsCart4 />
                        </div>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header