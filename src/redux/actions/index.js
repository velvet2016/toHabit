
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


const fetchHabits = (habitsService, dispatch) => () => {
    dispatch(habitsRequested());
    habitsService.getHabits()
        .then((data) => dispatch(habitsLoaded(data)))
        .catch((error) => dispatch(habitsError(error)));
};

export {
    fetchHabits,
};