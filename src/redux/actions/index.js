
const habitsLoaded = (habits) => {
    return {
        type: 'FETCH_HABITS_SUCCESS',
        payload: habits
    }
};

const habitsRequested = () => {
    return {
        type: 'FETCH_HABITS_REQUEST',
    }
};

const habitsError = (error) => {
    return {
        type: 'FETCH_HABITS_FAILURE',
        payload: error
    }
};

const edit = (id) => {
    return {
        type: 'SHOW_INPUT',
        payload: id
    }
};

const removeHabit = (idx, habitsService, dispatch) => {
    habitsService.removeHabit(idx)
        .then(() => dispatch(fetchHabits()))
        .catch((error) => dispatch(habitsError(error)));
};

const makeEditHabit = (habitsService, dispatch) => (newHabit) => {
    habitsService.makeEditHabit(newHabit)
        .then(() => dispatch(fetchHabits()))
        .catch((error) => dispatch(habitsError(error)));
};

const fetchHabits = () => {
    return {
        type: 'FETCH_HABITS'
    }
};

export {
    habitsRequested,
    habitsLoaded,
    fetchHabits,
    makeEditHabit,
    edit,
    removeHabit
};