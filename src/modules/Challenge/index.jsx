import React from "react";
import Categories from "../../components/Categories";
import Clients from "../../components/Clients";
import withProvider from "../withProvider";
function Home() {
    return (
        <div>
            <Categories></Categories>
            <Clients></Clients>
        </div>
    );
}
export default withProvider(Home);
