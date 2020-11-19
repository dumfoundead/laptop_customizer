import React, { Component } from 'react';
import './CartTotal.css';

class CartTotal extends Component {
  render() {
    const {selected, currencyFormat} = this.props;

    const total = Object.keys(selected).reduce(
      (acc, curr) => acc + selected[curr].cost, 0
    );

    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {currencyFormat.format(total)}
        </div>
      </div>
    );
  }
}

export default CartTotal;