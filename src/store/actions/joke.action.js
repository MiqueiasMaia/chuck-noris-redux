import { GET_JOKE } from "./types";

export const getJoke = () => {
    return async (dispatch) => {
        const uri = 'https://api.chucknorris.io/jokes/random';
        const response = await fetch(uri);
        const data = await response.json();
        dispatch({
            type: GET_JOKE,
            payload: data.value
        });
    }
};
