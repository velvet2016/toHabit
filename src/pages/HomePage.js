import React from 'react';
import HabitList from "../components/habit-list/index";
import CurrentWeekMarkedHabit from "../components/currentWeekMarkedHabit/index";
import InputNewHabit from "../components/input-new-habit";

const HomePage = () => {
    return (
        <div>
            <InputNewHabit />
            <HabitList />

        </div>)
};

export default HomePage