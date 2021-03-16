import {
    FETCH_HABITS,
    FETCH_HABITS_FAILURE,
    FETCH_HABITS_REQUEST,
    FETCH_HABITS_SUCCESS,
    MAKE_EDIT_HABIT,
    REMOVE_HABIT,
    SHOW_INPUT
} from "./types";

const habitsLoaded = (habits) => {
    return {
        type: FETCH_HABITS_SUCCESS,
        payload: habits
    }
};

const habitsRequested = () => {
    return {
        type: FETCH_HABITS_REQUEST,
    }
};

const habitsError = (error) => {
    return {
        type: FETCH_HABITS_FAILURE,
        payload: error
    }
};

const edit = (id) => {
    return {
        type: SHOW_INPUT,
        payload: id
    }
};

const removeHabit = (idx) => {
    return {
        type: REMOVE_HABIT,
        payload: idx
    }
};

const makeEditHabit = (newHabit) => {
    return {
        type: MAKE_EDIT_HABIT,
        payload: newHabit
    }
};

const fetchHabits = () => {
    return {
        type: FETCH_HABITS
    }
};

export {
    habitsRequested,
    habitsLoaded,
    fetchHabits,
    makeEditHabit,
    edit,
    habitsError,
    removeHabit
};