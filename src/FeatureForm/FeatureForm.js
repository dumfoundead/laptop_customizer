import React, { Component } from 'react';
import Feature from '../Feature/Feature';
import './FeatureForm.css';

/*
The FeaturesForm Component returns a form that contains
individual Feature Components the user can interact with
*/

class FeaturesForm extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      return (
        <Feature 
          onUpdateFeature={(feature, newValue) => this.props.onUpdateFeature(feature, newValue)}
          currencyFormat={this.props.currencyFormat}
          features={this.props.features}
          selected={this.props.selected}
          feature={feature}
          idx={idx}
          key={idx}
        />
      );
    });
    return (
        <form className="main__form">
        <h2>Customize your laptop</h2>
            {features}
        </form>
    )
  }
}

export default FeaturesForm;