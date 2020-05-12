import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customer = {
  'id': 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '포스트말론',
  'birthday' : '951010',
  'gender' : 'man',
  'job' : 'singer'
}

class App extends Component {
  render() {
    return (
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gneder={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
