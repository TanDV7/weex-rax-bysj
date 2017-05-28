/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-05-28 10:04:52
        Filename: index.js
        Description: Created by SpringHack using vim automatically.
**/
import { useStrict, action, observable } from 'mobx';

useStrict(true);

class Model {

  @observable
  state = {
    userId: ''
  };

  @action
  setState(newState) {
    Object.keys(newState).forEach((key) => { this.state[key] = newState[key]; });
  }

}

export default new Model();
