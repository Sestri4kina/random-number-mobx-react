import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
export default class App extends React.Component {
  getRandomNumber(numbOne, numbTwo) {
    return Math.floor( Math.random() * ( +numbTwo - +numbOne )) + +numbOne;
  }
  
  handleReset() {
    this.props.store.reset();
  }

  render() {
    const {numbers, getRandomNumber} = this.props.store;
    return (
      <div>
        <DevTools />
        <h1>Get a random number from a range</h1>
        <p>Enter one by one two numbers.</p>
        <p>Make sure that the first number is smaller than the second one.</p>
        <p>You've entered {JSON.stringify(this.props.store.numbers)}.</p>                      
        <NumberInput store={this.props.store} />

        {
          (numbers[0] && numbers[1]) &&
          <NumberList store={this.props.store}/>
        }

        {
          (numbers[0] && numbers[1]) &&
            <h3>The random number from the range [ {numbers[0]}, {numbers[1]} ] is {this.getRandomNumber(numbers[0], numbers[1])}.</h3>
        }
        <button onClick={this.handleReset.bind(this)}>Reset</button>
      </div>
    );
  }
}

@observer
class NumberInput extends React.Component {
  
  handleSubmit(e) {
    e.preventDefault();
    const value = this.refs.input.value;   
    
    if (!value) {
      return;
    }
    
    this.props.store.addNumber(+value);
    this.refs.input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="input"/>
        <input type="submit" value="Add a number" />
      </form>
    );
  }
}

@observer 
class NumberList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.store.numbers.map((number, id) => 
            <li key={id}>
             {id === 0 ? 'The lower bound ' : 'The upper bound '} is {number}.   
            </li>
            )}  
        </ul>
      </div>
    );
  }
}


