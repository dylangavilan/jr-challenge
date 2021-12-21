import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../store/actions/actions";
export default function Clients() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getClients());
    }, [dispatch]);

    return <div>{}</div>;
}
