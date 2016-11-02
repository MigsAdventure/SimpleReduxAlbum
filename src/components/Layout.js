import React, { Component } from 'react';
import MainPage from './MainPage';

export default class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Picture Album</h1>
        <MainPage />
      </div>
    );
  }
}
