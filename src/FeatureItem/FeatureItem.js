import React, { Component } from 'react';
import './FeatureItem.css';
import slugify from 'slugify';

/*
A FeatureItem component returns a single form input and label
*/

class FeatureItem extends Component {
  render() {
    const {currencyFormat, itemHash, feature, selected, item} = this.props;
        
    return (
      <div key={itemHash} className="feature__item">
          <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === selected[feature].name}
          onChange={e => this.props.onUpdateFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
          {item.name} ({currencyFormat.format(item.cost)})
          </label>
      </div>
    );
  } 
}

export default FeatureItem;