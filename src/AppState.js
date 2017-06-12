import { observable, computed, action } from 'mobx';



class AppState {
  @observable numbers = []
  
  @action addNumber(numberValue) {
     this.numbers.push(numberValue);
  }

  @action reset() {
    this.numbers = [];
  }
}



const appState = new AppState();
export default appState;

