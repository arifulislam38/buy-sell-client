import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Main from "../Layouts/Main/Main";
import AdminAccess from "../Pages/Access/AdminAccess";
import PrivateAccess from "../Pages/Access/PrivateAccess";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllBuyers from "../Pages/AllBuyers/AllBuyers";
import AllSellers from "../Pages/AllSellers/AllSellers";
import AllUsers from "../Pages/AllUsers/AllUsers";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category";
import ErrorPage from "../Pages/ErrorElement/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyBuyers from "../Pages/MyBuyers/MyBuyers";
import MyOrders from "../Pages/MyOrders/MyOrders";
import MyProducts from "../Pages/MyProducts/MyProducts";
import Register from "../Pages/Register/Register";
import ReportedProducts from "../Pages/ReportedProduct/ReportedProducts";

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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/dashboard',
                element: <PrivateAccess><Dashboard></Dashboard></PrivateAccess>,
                children: [
                    {
                        path: '/dashboard/allusers',
                        element: <AdminAccess><AllUsers></AllUsers></AdminAccess>
                    },
                    {
                        path: '/dashboard/allbuyers',
                        element: <AdminAccess><AllBuyers></AllBuyers></AdminAccess>
                    },
                    {
                        path: '/dashboard/allsellers',
                        element: <AdminAccess><AllSellers></AllSellers></AdminAccess>
                    },
                    {
                        path: '/dashboard/addproducts',
                        element: <AddProduct></AddProduct>
                    },
                    {
                        path: '/dashboard/reportproduct',
                        element: <AdminAccess><ReportedProducts></ReportedProducts></AdminAccess>
                    },
                    {
                        path: '/dashboard/mybuyers',
                        element: <MyBuyers></MyBuyers>
                    },
                    {
                        path: '/dashboard/myorders',
                        element: <MyOrders></MyOrders>
                    },
                    {
                        path: '/dashboard/myproducts',
                        element: <MyProducts></MyProducts>
                    }
                ]
            }
        ]
    }
]);

export default router;