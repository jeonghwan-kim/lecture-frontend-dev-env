import * as React from 'react';
import Name from './Name';

class Hello extends React.Component {
  render() {
    return <h1>Hello <Name /></h1>;
  }
}

// TODO: 핫로더를 지원하는 컴퍼넌트로 변환하세요
export default Hello