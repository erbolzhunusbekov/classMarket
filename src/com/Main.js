import React from 'react';
import Content from './Content/Content';
import MyNavbar from './MyNavbar/MyNavbar';
import PRODUCT from '../source/products.json'
import CATEGORY from '../source/categories'

class Main extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      product: PRODUCT,
      category: CATEGORY,
    }
  }

  render() {
    return (
      <>

        <MyNavbar product={this.state.product} category={this.state.category} />
        <Content product={this.state.product} category={this.state.category} />
        
      </>
    )
  }
}

export default Main;