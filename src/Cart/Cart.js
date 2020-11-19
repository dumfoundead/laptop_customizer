import React, { Component } from 'react';
import CartSummary from '../CartSummary/CartSummary';
import CartTotal from '../CartTotal/CartTotal';
import './Cart.css';

class Cart extends Component {
  render() {
    const {selected, currencyFormat} = this.props;

    const summary = Object.keys(selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx; 
      const selectedOption = selected[feature];
      return ( 
        <CartSummary
        currencyFormat = {currencyFormat}
        selectedOption={selectedOption}
        featureHash={featureHash}
        feature={feature}
        key={featureHash}/>
      );
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <CartTotal selected={selected} currencyFormat={currencyFormat} />
      </section>
    )
  }
}

export default Cart;