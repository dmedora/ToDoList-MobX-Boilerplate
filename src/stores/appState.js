import { observable, action } from 'mobx'

class AppState {

    @observable tasks = [];
    // what MobX tag do you need here (hint it's imported). Why do you want to mark this as observable?
    // Do you always mark your variables as observable?
    // Is an array the best option? Recommended: Look at MobX docs and make miniStore (see 'the perfect data model' or linked slides in README)

    @action
    addTask = (dict) => {
        // fill in
        this.tasks.push(dict);
    };

    @action
    changeIsDone = (key)  => {
        // fill in
        for (let i=0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === key) {
                this.tasks[i].isDone = !this.tasks[i].isDone;
                console.log("changeIsDone running");
                break;
            }
        }
    };

    @action
    deleteTask = (key) => {
        // fill in
        for (let i=0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === key) {
                this.tasks.splice(i,1);
                break;
            }
        }
    }
}

export default new AppState();