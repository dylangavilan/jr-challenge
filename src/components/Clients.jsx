import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getClients } from "../store/actions/actions";
import {
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
} from "@material-ui/core";

export default function Clients() {
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.clientReducer.clients);
    const categories = useSelector((state) => state.categoryReducer.categories);
    useEffect(() => {
        dispatch(getClients());
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <List>
            {clients?.map((el) => {
                return (
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                style={{
                                    backgroundColor:
                                        categories[el.categoryId].color,
                                }}
                            >
                                {el.customerName[0]}
                            </Avatar>
                        </ListItemAvatar>

                        <ListItemText
                            primary={`${el.customerName}  ${el.customerLastName}`}
                            secondary={
                                <span
                                    style={{
                                        color: categories[el.categoryId].color,
                                    }}
                                >
                                    {el.title}: {el.groupDescription}
                                </span>
                            }
                        />
                    </ListItem>
                );
            })}
        </List>
    );
}
