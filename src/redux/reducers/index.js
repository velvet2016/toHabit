
const initialState = {
    habits: [],
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
        default:
            return state
    }
};

export default reducer