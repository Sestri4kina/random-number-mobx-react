import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getRandomNumber(numbOne, numbTwo) {
    return Math.floor( Math.random() * ( +numbTwo - +numbOne )) + +numbOne;
  }
  
  handleReset() {
    this.props.store.reset();
  }

  render() {
    const {numbers} = this.props.store;
    return (
      <div>
        <DevTools />
        <h1>Get a random number from a range</h1>
        <p>Enter one by one two numbers.</p>
        <p>Make sure that the first number is smaller than the second one.</p>
        {/*<p>You've entered {JSON.stringify(this.props.store.numbers)}.</p>                      */}
        <NumberInput numbers={this.props.store.numbers} onAddNumber={this.props.store.addNumber}/>

        {
          <NumberList numbers={this.props.store.numbers}/>
        }

        {
            <h3>The random number from the range is {this.props.store.randomNumber}.</h3>
        }
        <button onClick={this.handleReset.bind(this)}>Reset</button>
      </div>
    );
  }
}

@observer
class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = this.refs.input.value;   
    
    if (!value) {
      return;
    }
    
    this.props.onAddNumber(+value);
    this.refs.input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="input"/>
        <input type="submit" value="Add a number" />
      </form>
    );
  }
}

@observer 
class NumberList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.numbers.map((number, id) => 
            <li key={id}>
             {id === 0 ? 'The lower bound ' : 'The upper bound '} is {number}.   
            </li>
            )}  
        </ul>
      </div>
    );
  }
}


