import React from 'react';
import Item from '../Item/Item';

class Content extends React.Component {
  render() {
    return (
      <div className={'container mt-5'}>
        <div className={'row'}>
          <Item product={this.props.product} category={this.props.category} />
        </div>
      </div>
    )
  }
}

export default Content;