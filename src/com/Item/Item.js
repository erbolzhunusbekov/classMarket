import React from 'react';
import { Card, Button } from 'react-bootstrap';

class Item extends React.Component {
  render() {
    return (
      <>
        {this.props.product.map((v) => {
          return (
            <div className={'col-xl-3 col-lg-3 col-md-4 col-sm-12 text-center my-4 cards'}>
              <Card>
                <Card.Img src={v.main_image.path.original} />
                <Card.Body>
                <span className={'sell'}>
                  { v.discount === null ? '' : '-' + v.discount + '%' }
                </span>
                  <Card.Title>{v.title}</Card.Title>
                  <Button variant="warning">
                    { v.discount ? <del>{v.price}</del> : '' }
                    <span>
                      { v.discount ? v.price - (v.price * v.discount / 100) : v.price }
                    </span>
                  </Button> 
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </>
    )
  }
}

export default Item;