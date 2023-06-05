import React, { useState } from 'react'
import { Button, Container, Form, Nav, NavDropdown, NavLink, Navbar, Offcanvas } from 'react-bootstrap'


const Header = () => {

  const [activeKey, setActiveKey] = useState(1)

  const handleSelect = (e) => {
    setActiveKey(e)
  }

  return (
    <>
      <Navbar bg="light" expand={'md'} className='py-3'>
        <Container>
          <Navbar.Brand className='bold my-primary'>ZARA SKATING ACADEMY</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'md'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`}>
              <span className="bold">ZARA SKATING ACADEMY</span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link href="/" className='mx-2'>Home</Nav.Link>
                <Nav.Link href="#about" className='mx-2'>About</Nav.Link>
                <Nav.Link href="#training" className='mx-2'>Training</Nav.Link>
                <Nav.Link href="#mission" className='mx-2'>Mission</Nav.Link>
                <Nav.Link href="#footer" className='mx-2'>Contacts</Nav.Link>
              </Nav>
              <Button className='btn px-4 btn-warning md-margin-top'>
                Student Login
              </Button>
              <Button className='btn md-margin-top mx-2'>
                Admin Login
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Header