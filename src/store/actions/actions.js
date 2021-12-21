import axios from "axios";

export function getClients() {
    return function (dispatch) {
        return axios.get("/api/product").then((res) => {
            const products = res.data;
            dispatch({ type: "GET_ALL", payload: products });
        });
    };
}
export function getCategories() {
    return async function (dispatch) {
        const brands = await axios.get("/api/brand");
        dispatch({ type: "GET_BRANDS", payload: brands.data });
    };
}
