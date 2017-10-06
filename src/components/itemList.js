import React from 'react';
import Item from './item';
import {observer, inject} from 'mobx-react';

const ItemList = (props) => {
    let taskItems = props.appState.tasks.map((task) => {
        return (
            <Item
                text={task.text}
                isDone={task.isDone}
                id={task.id}
                key={task.id}
            />
        )
    });


    return (
        <ul className="item-list">
            {taskItems}
        </ul>

    );
};

export default inject("appState") (observer(ItemList));
// functional component - you put observer here