import { observable, computed, action } from 'mobx';



class AppState {
  @observable numbers = []
  
  @action addNumber(numberValue) {
     this.numbers.push(numberValue);
  }

  @computed get randomNumber() {
    if (this.numbers.length !== 2) return;
    return Math.floor( Math.random() * ( +this.numbers[1] - +this.numbers[0] )) + +this.numbers[0];
  }

  @action reset() {
    this.numbers = [];
  }
}



const appState = new AppState();
export default appState;

