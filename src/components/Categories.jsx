import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/actions/actions";
import { Grid, makeStyles, Typography, Container } from "@material-ui/core";
const useStyle = makeStyles({
    count: {
        margin: " 0.5rem",
        fontFamily: "bold",
        color: "#0e1111",
        padding: "2px 15px ",
        borderRadius: "0.4rem",
        fontSize: "1rem",
    },
});
export default function Categories() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categoryReducer.categories);
    const classes = useStyle();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <Container>
            <Grid spacing={3} container direction="row" justifyContent="center">
                {categories?.map((e) => (
                    <Grid item xs={4}>
                        <Typography>
                            <span
                                className={classes.count}
                                style={{ backgroundColor: `${e.color}` }}
                            >
                                {e.ctasCount}
                            </span>
                            <span>{e.name}</span>
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}