import { GET_TOP10 } from "../actions/types";
const initialState = {
    clients: [],
};

export default function clientReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TOP10:
            return {
                ...state,
                clients: action.payload,
            };
        default:
            return state;
    }
}
