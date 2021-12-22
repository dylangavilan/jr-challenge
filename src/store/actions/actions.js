import axios from "axios";
import { CLIENT_API, CATEGORIES_API } from "./config";
import { GET_CATEGORIES, GET_TOP10 } from "./types";
export function getClients() {
    return async function (dispatch) {
        const response = await axios.get(CLIENT_API);
        dispatch({ type: GET_TOP10, payload: response.data.data });
    };
}
export function getCategories() {
    return async function (dispatch) {
        const response = await axios.get(CATEGORIES_API);
        dispatch({ type: GET_CATEGORIES, payload: response.data.data });
    };
}
