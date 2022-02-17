import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Card, Button } from 'react-bootstrap';
import PRODUCTS from '../source/products.json';
import CATEGORIES from '../source/categories';

class Navbar1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: PRODUCTS,
      value: null,
      first: '',
    }
  }

  btnDiscount = () => {
    this.setState({
      id: PRODUCTS.filter(v => {
        return v.discount !== null;
      })
    })
  }

  btnAll = () => {
    this.setState({
      id: PRODUCTS.map(v => {
        return v
      }),
      value: null
    })
  }

  inpSearch = (event) => {
    this.setState({
      first: event
    })
  }

  btnSearch = () => {
    let result = PRODUCTS.filter(v => {
      if (v.title.toLowerCase().indexOf(this.state.first.toLowerCase()) !== -1) return v
    })
    this.setState({
      id: result,
      first: ''
    })
  }



  render() {
    return (
      <div className={'container'}>
        <Navbar bg={'light'} className="container fixed-top" expand="lg">
          <Navbar.Brand onClick={() => this.btnAll()} href="#">ProMarket</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => this.btnAll()} href="#">Главная</Nav.Link>
              <Nav.Link onClick={() => this.btnDiscount()} href="#">Скидки</Nav.Link>
              <NavDropdown title="Категории" id="basic-nav-dropdown">
                {CATEGORIES.map((c) => {
                  return (
                    <NavDropdown.Item onClick={() => this.setState({ value: c.id })} href="#"> {c.short_title} </NavDropdown.Item>
                  )
                })}
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl onChange={(e) => this.inpSearch(e.target.value)}  type="text" placeholder="Поиск по имени" className="mr-sm-2" />
              <Button onClick={() => this.btnSearch()} variant="outline-success">Поиск</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

                <h1 className={'my-5 text-center'}>
                  Поиск товара: {this.state.first}
                </h1>

        <div className={'row'}>

          {this.state.id.filter(v => {
            return this.state.value !== null ? (v.category_id === this.state.value) : true
          }).map(p => {
            return (
              <div className={'col-xl-3 col-lg-3 col-md-4 col-sm-12 text-center mb-4 cards'}>
                <span className={'dark'}></span>
                <Card className={'p-4 cards__sk'}>
                  {p.discount !== null ? <span className={'spanShow'}> { p.discount }% </span> : null}
                  <div className={'text-center'}><Card.Img variant="top" className={'img-fluid'} src={p.main_image.path.original} /></div>
                  <hr/>

                  <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Button className={'btnCard'} variant="outline-primary"> <span className={'spanCard'}> {p.discount ? <del>{p.price}</del> : ''} </span> {p.discount ? p.price - (p.price * p.discount / 100) : p.price} сом</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Navbar1;