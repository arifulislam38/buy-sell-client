import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Sidebar = () => {
    const {isAdmin, accType} = useContext(AuthContext);

    return (
        <div className='shadow-lg rounded-sm lg:w-[30%] p-3 flex flex-col gap-3'>
            {
                isAdmin && accType === ''&&
                <>
                    <Link to='/dashboard/allusers'><button className='border rounded p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >All Users</button></Link>

                    <Link to='/dashboard/allsellers'><button className='border rounded p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >All Sellers</button></Link>

                    <Link to='/dashboard/allbuyers'><button className='border rounded p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >All Buyers</button></Link>

                    <Link to='/dashboard/reportproduct'><button className='border rounded p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >Reported Products</button></Link>
                </>
            }
            {
                accType === 'Buyer'&&
                <>
                    <Link to='/dashboard/myorders'><button className='border rounded p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >My Orders</button></Link>
                </>
            }
            {
                accType === "Seller" &&
                <>
                    <Link to='/dashboard/myproducts'><button className='border rounded p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >My Products</button></Link>

                    <Link to='/dashboard/addproduct'><button className='border rounded p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >Add Products</button></Link>

                    <Link to='/dashboard/mybuyers'><button className='border rounded p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >My Buyers</button></Link>
                </>
            }
        </div>
    );
};

export default Sidebar;