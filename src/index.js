import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import {RouterProvider} from "react-router-dom";
import router from "./router";
import {GlobalContextProvider} from "./context/globalContext";
import {ChakraProvider} from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <GlobalContextProvider>
            <ChakraProvider>

                <RouterProvider router={router}/>
            </ChakraProvider>
        </GlobalContextProvider>
    </>
);
