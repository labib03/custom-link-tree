import {createBrowserRouter} from "react-router-dom";
import {Bidang, Home} from "../pages";
import {Layout} from "../components";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: ":url",
                element: <Bidang/>,
                children: [
                    {
                        path: ":sub",
                        element: <Bidang/>,
                        children: [
                            {
                                path: ":sub",
                                element: <Bidang/>,
                                children: [
                                    {
                                        path: ":sub",
                                        element: <Bidang/>,
                                        children: [
                                            {
                                                path: ":sub",
                                                element: <Bidang/>
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
        ]
    },

]);

export default router;
