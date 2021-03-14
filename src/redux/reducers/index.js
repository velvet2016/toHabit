
const initialState = {
    habits: [],
    newHabit: {},
    showInput: ''
};

const reducer = (state = initialState, action) => {
console.log('action.type: '+action.type);
console.log('action payload: '+action.payload);

    switch (action.type) {
        case 'FETCH_HABITS_REQUEST':
            return {
                ...state,
                habits: [],
                loading: true,
                error: null
            };
        case 'FETCH_HABITS_SUCCESS':
            return {
                ...state,
                showInput: '',
                habits: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_HABITS_FAILURE':
            return {
                ...state,
                habits: [],
                loading: false,
                error: action.payload
            };
        case 'SHOW_INPUT':
            return {
                ...state,
                showInput: action.payload
            };
        case 'REMOVE_HABIT':
            return {
                ...state,
                showInput: '',
                habits: action.payload,
                loading: false,
                error: null
            };
        default:
            return state
    }
};

export default reducer