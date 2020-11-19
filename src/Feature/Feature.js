import React, { Component } from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import './Feature.css';
import slugify from 'slugify';

/*
A Feature Component returns a <fieldset> that contains 
individual FeatureItem Components the user can click on.
*/

class Feature extends Component {
    render() {
      const {feature, features, idx} = this.props;
      const featureHash = feature + '-' + idx;
      const options = features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <FeatureItem
              onUpdateFeature={(feature, newValue) => this.props.onUpdateFeature(feature, newValue)}
              currencyFormat={this.props.currencyFormat}
              selected={this.props.selected}
              itemHash={itemHash}
              feature={feature}
              key={itemHash}
              item={item}/>
            );
      });
    
      return (
          <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
              <h3>{feature}</h3>
          </legend>
          {options}
          </fieldset>
      );
    }
  }
  
  export default Feature;