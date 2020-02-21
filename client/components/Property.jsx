import React from 'react';
import Ratings from './Ratings.jsx';

class Property extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Entire Loft In Cape Town'
    };
  }

  render() {
    return (
      <div id="property">
        <div id="property-spacing">
          <div id="property-name">{this.state.name}</div>
          <Ratings />
        </div>
      </div>
    );
  }
}

export default Property;