import React from 'react';
import {
  Navbar, Nav, NavDropdown, Form, FormControl, Card, Button, Container
} from 'react-bootstrap';
import PRODUCTS from '../source/products.json'
import CATEGORY from '../source/categories'

class InternetApp extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      products: PRODUCTS,
      value: null,
      inpV: '',
    }
  }
  
  btnDiscount = () => {
    this.setState({
      products: PRODUCTS.filter((v) => {
        return(
          v.discount !== null
        )
      })
    })
  }

  inpValue = (e) => {
    this.setState({
      inpV: e
    })
  }

  searchBtn = () => {
    let result = PRODUCTS.filter((v) => {
      if (v.title.toLowerCase().indexOf(this.state.inpV.toLowerCase()) !== -1) return v
    })
    this.setState({
      products: result,
      inpV: '',
    })
  }


// ctrl + A
// ctrl + k + f

  btnAll = () => {
    this.setState({
      products: PRODUCTS.map((v) => {
        return v
      }),
      value: null
    })
  }

  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand onClick={() => this.btnAll()} href="#">InternetApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link onClick={() => this.btnDiscount()} href="">Скидки</Nav.Link>
                <NavDropdown title="Категории" id="navbarScrollingDropd own">
                  {CATEGORY.map((v) => {
                    return (
                      <NavDropdown.Item onClick={() => this.setState({ value: v.id })} href="">{v.title}</NavDropdown.Item>
                    )
                  })}
                </NavDropdown>
              </Nav>
              <Form className="d-flex ml-auto">
                <FormControl
                  onChange={(e) => this.inpValue(e.target.value)}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button onClick={() => this.searchBtn()} variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className={'container my-4'}>
          <div className={'row'}>
            {
              this.state.products.filter((b) => {
                return (
                  this.state.value !== null ? (b.category_id === this.state.value) : true
                )
              }).map((v) => {
              return (
                <div className={'col-3'}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img src={v.main_image.path.original} />
                    <Card.Body>
                      <Card.Title>{ v.title }</Card.Title>
                      <Button variant="primary">
                        { v.discount ? <del>{v.price}</del> : '' } 
                        <br/>
                        <span>
                          { v.discount ? v.price - (v.price * v.discount / 100) : v.price } сом
                        </span>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })
            }
          </div>
        </div>

      </>
    )
  }
}

export default InternetApp;