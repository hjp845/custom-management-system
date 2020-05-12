import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customer = {
  'name' : '포스트말론',
  'birthday' : '951010',
  'gender' : 'man',
  'job' : 'singer'
}

class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gneder={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
