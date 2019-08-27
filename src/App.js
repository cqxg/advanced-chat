import React, { Component } from 'react';
import { Button, Block } from 'components';
import { Auth } from 'pages';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Auth />
      </div>
    )
  };
};

export default App;
