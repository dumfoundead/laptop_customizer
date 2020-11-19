import React, { Component } from 'react';
import './CartSummary.css';

class CartSummary extends Component {
  render() {
        
    const {featureHash, feature, selectedOption, currencyFormat} = this.props; 

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {currencyFormat.format(selectedOption.cost)} 
        </div>
      </div>
    )
  }
}

export default CartSummary;