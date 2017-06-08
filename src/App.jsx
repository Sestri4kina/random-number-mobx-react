import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class App extends React.Component {
  
  render() {
    
    return (
      <div className='container'>
        <h1>Get a random number from a range</h1>
        <NumberInput />
        <NumberList />
      </div>
    );
  }
}

@observer 
class NumberList extends React.Component {
  render() {
    let store = this.props.store;
    return (
      <ul>
          {store.numbers.map((number, id) => {
            <NumberView text={text} number={number} key={id} />
          })}
      </ul>
    );
  }
}

@observer 
class NumberView extends React.Component {
  render() {
    const number = this.props.number;
    const text = this.props.text;
    return (
      <li>{ text } { number }</li>
    );
  }
}

@observer 
class NumberInput extends React.Component {
  addNumber(numb) {
    this.props.store.numbers.push(numb);
  }

  handleSubmit(e) {
    e.preventDefault();
    let value = e.target.value;
    this.addNumber(value);
    e.target.value = '';
  }

  handleChange() {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={this.handleChange.bind(this)}/>
        <input type="submit" value="Add a new number" />
      </form>
    );
  }
}

export default App;
