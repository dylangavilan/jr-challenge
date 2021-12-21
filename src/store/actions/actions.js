import axios from "axios";
import { GET_CATEGORIES, GET_TOP10 } from "./types";
export function getClients() {
    return async function (dispatch) {
        const response = await axios.get(
            "https://private-bf0ebc-n5101.apiary-mock.com/api/ctas/top10"
        );
        dispatch({ type: GET_TOP10, payload: response.data });
    };
}
export function getCategories() {
    return async function (dispatch) {
        const brands = await axios.get(
            "https://private-bf0ebc-n5101.apiary-mock.com/api/spa/categories"
        );
        dispatch({ type: GET_CATEGORIES, payload: brands.data });
    };
}
