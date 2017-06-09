import { observable, computed, action } from 'mobx';

class AppState {
  @observable numbers = [1, 37];
  
  @computed get getRandomNumber() {
    let numOne = Number(this.numbers[0]);
    let numTwo = Number(this.numbers[1]);
    return Math.floor( Math.random() * ( numTwo - numOne )) + numOne;
  }

  @action.bound addNumber(value) {
    let prevNumbers = this.numbers.slice();
    this.numbers = prevNumbers.concat(value);
  }
}


const appState = new AppState();
export default appState;
