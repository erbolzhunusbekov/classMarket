import React from 'react';
import { Navbar, Nav, Form, Button, NavDropdown, FormControl } from 'react-bootstrap'

class MyNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg={'light'} className="container fixed-top" expand="lg">
          <Navbar.Brand href="#">OSH</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Главная</Nav.Link>
              <Nav.Link onClick={() => this.Apps()} href="#">Скидки</Nav.Link>
              <NavDropdown title="Категории" id="basic-nav-dropdown">
                {this.props.category.map((v) => {
                  return (
                    <NavDropdown.Item href='#'> {v.short_title} </NavDropdown.Item>
                  )
                })}
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Поиск по имени" className="mr-sm-2" />
              <Button variant="outline-success">Поиск</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}

export default MyNavbar;