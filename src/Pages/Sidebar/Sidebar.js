import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Sidebar = () => {
    const {isAdmin, accType} = useContext(AuthContext);

    return (
        <div className='shadow-lg rounded-sm lg:w-[30%] p-3 flex flex-col gap-3'>
            {/* className={({isActive}) => isActive ? 'text-blue-500' : 'text-yellow-100'} */}
            {
                isAdmin &&
                <>
                    <NavLink className={({isActive}) => isActive ? 'bg-blue-800 rounded-sm' : 'bg-blue-300'} to='/dashboard/allusers'><button className='border p-2 w-full hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >All Users</button></NavLink>

                    <NavLink className={({isActive}) => isActive ? 'bg-blue-800 rounded-sm' : 'bg-blue-300'} to='/dashboard/allsellers'><button className='border p-2 w-full hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >All Sellers</button></NavLink>

                    <NavLink className={({isActive}) => isActive ? 'bg-blue-800 rounded-sm' : 'bg-blue-300'} to='/dashboard/allbuyers'><button className='border p-2 w-full hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >All Buyers</button></NavLink>

                    <NavLink className={({isActive}) => isActive ? 'bg-blue-800 rounded-sm' : 'bg-blue-300'} to='/dashboard/reportproduct'><button className='border p-2 w-full hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >Reported Products</button></NavLink>
                </>
            }
            {
                accType === 'Buyer'&&
                <>
                    <Link to='/dashboard/myorders'><button className='border rounded p-2 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >My Orders</button></Link>

                    <Link to='/dashboard/wishlist'><button className='border rounded p-2 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >My WishList</button></Link>
                </>
            }
            {
                accType === "Seller" &&
                <>
                    <Link to='/dashboard/myproducts'><button className='border rounded p-2 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >My Products</button></Link>

                    <Link to='/dashboard/addproducts'><button className='border rounded p-2 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >Add Products</button></Link>

                    <Link to='/dashboard/mybuyers'><button className='border rounded p-2 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >My Buyers</button></Link>
                </>
            }
        </div>
    );
};

export default Sidebar;