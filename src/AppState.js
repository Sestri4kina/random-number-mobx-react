import { observable, computed } from 'mobx';

class AppState {
  @observable numbers = [];
  
  @computed get getRandomNumber() {
    let numOne = Number(this.numbers[0]) || 0;
    let numTwo = Number(this.numbers[1]) || 0;
    return Math.floor( Math.random() * ( numTwo - numOne )) + numOne;
  }
}

export default AppState;
