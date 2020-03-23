import RegisterStore from 'src/stores/RegisterStore';
import SignUpStore from 'src/stores/SignUpStore';
import UserStore from './UserStore';
import SelsoListStore from './SelsoListStore';
import MyPointStore from './MyPoint';
import FroshStore from './FroshStore';

class RootStore {
  constructor() {
    this.selsoListStore = new SelsoListStore(this);
    this.userStore = new UserStore(this);
    this.registerStore = new RegisterStore(this);
    this.signUpStore = new SignUpStore(this);
    this.myPointStore = new MyPointStore(this);
    this.froshStore = new FroshStore(this);
  }
}

export default RootStore;
