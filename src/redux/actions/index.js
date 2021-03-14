
const habitsLoaded = (books) => {
    return {
        type: 'FETCH_HABITS_SUCCESS',
        payload: books
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
        .then(() => fetchHabits(habitsService, dispatch)())
        .catch((error) => dispatch(habitsError(error)));
};

const makeNewHabit = (habitsService, dispatch) => (newHabit) => {
    habitsService.makeNewHabit(newHabit)
        .then(() => fetchHabits(habitsService, dispatch)())
        .catch((error) => dispatch(habitsError(error)));
};

const fetchHabits = (habitsService, dispatch) => () => {
    dispatch(habitsRequested());
    habitsService.getHabits()
        .then((data) => dispatch(habitsLoaded(data)))
        .catch((error) => dispatch(habitsError(error)));
};

export {
    fetchHabits,
    makeNewHabit,
    edit,
    removeHabit
};