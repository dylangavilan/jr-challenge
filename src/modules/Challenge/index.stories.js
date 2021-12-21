import React from "react";
import { storiesOf } from "@storybook/react";
import { Grid, Typography, Divider } from "@material-ui/core";
import Home from "./index";

storiesOf("Clients", module).add("Data", () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant="h3">Jr. Front End Challenge</Typography>
                <Divider />
            </Grid>
            <Grid item>
                <Home />
            </Grid>
        </Grid>
    );
});
