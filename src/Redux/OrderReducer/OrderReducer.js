import { ORDER_ERROR, ORDER_LOADING, ORDER_SUCCESS } from "./OrderActionTypes";

const initState = {
    isLoading: false,
    isError: false,
    order: []
}

export const OrderReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ORDER_LOADING:
            return {
                ...state, isLoading: true
            }
        case ORDER_SUCCESS:
            return {
                ...state, isLoading: false, order: payload
            }
        case ORDER_ERROR:
            return {
                ...state, isLoading: false, isError: true
            }
        default:
            return state;
    }
}

// export { OrderReducer }
