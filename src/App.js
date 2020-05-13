import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const customer = [
  {
  'id': 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '포스트말론',
  'birthday' : '951010',
  'gender' : 'man',
  'job' : 'singer'
},
{
  'id': 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '황정평',
  'birthday' : '981025',
  'gender' : 'man',
  'job' : 'investor'
},
{
  'id': 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '홍길동이',
  'birthday' : '130134',
  'gender' : 'man',
  'job' : 'programmer'
},
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return (
              <Customer
              // key 는 map 에 있어서 그냥 필요한 값이다.
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
