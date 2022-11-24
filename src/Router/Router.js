import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Category from "../Pages/Category/Category";
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
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`${process.env.REACT_APP_API}/category/${params.id}`)
            }
        ]
    }
]);

export default router;