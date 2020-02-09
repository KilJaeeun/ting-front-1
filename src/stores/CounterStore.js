import { action, observable } from 'mobx';

export default class CounterStore {
  @observable number = 0;

  constructor(root) {
    this.root = root;
  }

  @action increase = () => {
    this.number++;
  };

  @action decrease = () => {
    this.number--;
  };
}