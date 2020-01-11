import * as React from 'react';
import { hot } from 'react-hot-loader';
import Name from './Name';

class Hello extends React.Component {
  render() {
    return <h1>Hello <Name /></h1>;
  }
}

export default hot(module)(Hello);