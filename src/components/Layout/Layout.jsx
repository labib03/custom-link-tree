import React from "react";
import { Outlet } from "react-router-dom";
import {ScrollToTop} from "../../utils";

const Layout = () => {
    return (
        <>
            <ScrollToTop />
            <div className='container'>
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
