import { observable, action } from 'mobx';
import appState from './appState';

class textBoxState {
    @observable text = '';
    // what MobX tag do you need here (hint it's imported). Why do you want to mark this as observable?
    // Do you always mark your variables as observable?

    @action
    handleChange = (e) => {
        // use e.target.value to extract text!
        this.text = e.target.value
    };

    @action
    handleSubmit = (e) => {
        // stops default action from form element from triggering
        e.preventDefault();
        // "require" in ES5 is equivalent to "import" in ES6. Here I'm importing a package that will generate a unique time based id.
        let uuid = require('uuid/v4');
        if (this.text === '') {
            console.error('error');
            return;
        }

        // create new task object
        let taskObj = {"text": this.text, "isDone": false, "id": uuid()};

        // reset text to empty string
        this.text = '';

        // appState.addTask(NEW_TASK);
        appState.addTask(taskObj);
    };

}

export default new textBoxState();