/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-06-03 22:32:40
        Filename: index.js
        Description: Created by SpringHack using vim automatically.
**/
import { toJS, useStrict, action, observable } from 'mobx';
import { AsyncStorage } from 'react-native';

useStrict(true);

class Model {

  @observable
  state = {
    userId: ''
  };

  constructor() {
    AsyncStorage.getItem('bysj', (err, json) => {
      if (err) return;
      if (JSON.parse(json)) {
        setTimeout(() => {
          this.setState(JSON.parse(json));
        }, 10);
      }
    });
  }

  @action
  setState(newState) {
    Object.keys(newState).forEach((key) => { this.state[key] = newState[key]; });
    AsyncStorage.setItem('bysj', JSON.stringify(toJS(this.state)));
  }

}

export default new Model();
