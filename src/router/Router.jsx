import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/home/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])

export default Router;