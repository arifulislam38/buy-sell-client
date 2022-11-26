import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Main from "../Layouts/Main/Main";
import AllSellers from "../Pages/AllSellers/AllSellers";
import AllUsers from "../Pages/AllUsers/AllUsers";
import Category from "../Pages/Category/Category";
import ErrorPage from "../Pages/ErrorElement/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`${process.env.REACT_APP_API}/category/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/dashboard',
                        element: <AllUsers></AllUsers>,
                        loader: ()=> fetch(`${process.env.REACT_APP_API}/allusers`)
                    },
                    {
                        path: '/dashboard/allbuyers',
                        element: <AllUsers></AllUsers>
                    },
                    {
                        path: '/dashboard/allsellers',
                        element: <AllSellers></AllSellers>,
                        loader: ()=> fetch(`${process.env.REACT_APP_API}/allsellers`)
                    },
                    {
                        path: '/dashboard/addproducts',
                        element: <AllUsers></AllUsers>
                    },
                    {
                        path: '/dashboard/reportproduct',
                        element: <AllUsers></AllUsers>
                    },
                    {
                        path: '/dashboard/mybuyers',
                        element: <AllUsers></AllUsers>
                    },
                    {
                        path: '/dashboard/myorders',
                        element: <AllUsers></AllUsers>
                    },
                    {
                        path: '/dashboard/myproducts',
                        element: <AllUsers></AllUsers>
                    }
                ]
            }
        ]
    }
]);

export default router;