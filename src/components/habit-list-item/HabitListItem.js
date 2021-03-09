import React from 'react';
import './habitListItem.css';

const HabitListItem = ({habit}) => {
    console.log(habit);
    const {id, title} = habit;
    return (
        <div className='habit-list-item'>
                <div>{title}</div>
                <button>mark today</button>
        </div>
    )
};

export default HabitListItem;