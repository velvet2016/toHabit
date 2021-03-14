import React from 'react';
import './habitListItem.css';
import EditHabit from "../edit-habit/EditHabit";

const HabitListItem = ({habit, showInput, idx, edit, removeHabit}) => {
    console.log(habit);
    const {id, title, category} = habit;

    const inputEdit = showInput === id ? <EditHabit idx={idx} habit={habit}/> : null;
    return (
        <li className='habit-list-item'>
            <div>{title}</div>
            <div>{category}</div>
            <button>mark today</button>
            <button onClick={removeHabit}>delete</button>
            <button onClick={edit}>edit</button>
            {inputEdit}
        </li>
    )
};

export default HabitListItem;