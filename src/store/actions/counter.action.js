import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET, COUNTER_UPDATE_NAME } from './types';

export const increment = () => {
    return {
        type: COUNTER_INCREMENT
    }
}

export const decrement = () => {
    return {
        type: COUNTER_DECREMENT
    }
}

export const reset = () => {
    return {
        type: COUNTER_RESET
    }
}

export const updateName = (name) => {
    return {
        type: COUNTER_UPDATE_NAME,
        payload: name
    }
}
