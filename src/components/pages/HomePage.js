import React from 'react';
import HabitList from "../habit-list";
import CurrentWeekMarkedHabit from "../currentWeekMarkedHabit";

const HomePage = () => {
    return (
        <div>
            <HabitList />
            <CurrentWeekMarkedHabit />
        </div>)
};

export default HomePage