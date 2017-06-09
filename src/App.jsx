import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
export default class App extends React.Component {
  
  render() {
    //const {numbers, getRandomNumber} = this.props.store;
    return (
      <div>
        <h1>Get a random number from a range</h1>
        <p>{this.props.store.addNumber(45)}</p>
        <p>{JSON.stringify(this.props.store.numbers)}</p> 
                  
        <NumberInput />
      
      </div>
    );
  }
}

/* add to App copmonent after <NumberInput />
<NumberList />
<div>
  {numbers.length === 2 && 
    <h3>`The random number is ${getRandomNumber()}`</h3>}
</div>
*/

/*
const NumberView = ({number, text}) => <li> {text} { number } </li> 
*/


@observer
class NumberInput extends React.Component {
  
  handleSubmit(e) {
    e.preventDefault();
    const value = this.refs.input.value;   
    console.log(this.props);
    if (!value) {
      return;
    }
    console.log(this.props);
    this.props.store.addNumber(value);
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

/*
@observer 
class NumberList extends React.Component {
  render() {
    let numbers  = this.props.store.numbers;
    return (
      <div>
        {numbers.length === 2 && 
          <ul>
              {numbers.slice().map((number, id) => {
                <NumberView number={number} text={`Number ${id} is `} key={id} />
              })}  
          </ul>}
      </div>
    );
  }
}
*/

