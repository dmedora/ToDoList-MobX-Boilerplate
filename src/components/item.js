import React, {Component} from 'react';
import {inject} from 'mobx-react';
import {observer} from 'mobx-react';

// Look this up - we're going to use the Provider syntax here to get appState. Very important to learn this.
@inject ("appState") @observer
class Item extends Component {
    markIsDone = () => {
        // fill in
    };

    deleteTask = (id) => {
        // fill in
        return this.props.appState.deleteTask(id);
    };

    render() {
        return (
            <div className="task">

                {/* this is a popular way of changing styling - depending on a boolean value, you can change the class name */}
                <div className={this.props.isDone ? "text completed done" : "text completed notdone"} onClick={() => {this.props.appState.changeIsDone(this.props.id)}}>
                    <p>{this.props.text}</p>
                    <div className="delete-icon" onClick={() => {this.deleteTask(this.props.id)}}>
                        X
                    </div>
                    {/* Note in the event handler onClick, I don't have to write onClick={() => this.deleteTask()}. ES6 allows me to write
                     onClick={this.deleteTask} and the compiler will understand what I mean */}
                </div>

            </div>
        )
    };
}

export default Item;