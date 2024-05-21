import { GET_JOKE } from "../actions/types";

const initialState = {
    joke: ''
};

const jokeReducer = (state = initialState, action) => {
    const options = {
        [GET_JOKE]: { 
            joke: action.payload
        }
    };
    return options[action.type] || state;
};

export default jokeReducer;
