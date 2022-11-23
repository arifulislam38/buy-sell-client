import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Pages/ErrorElement/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);

export default router;