import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Sidebar = () => {
    const {isAdmin, accType} = useContext(AuthContext);

    return (
        <div className='shadow-lg rounded-sm lg:w-[30%] p-3 flex flex-col gap-3'>
            {
                isAdmin && accType === ''&&
                <>
                    <button className='border rounded p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >All Users</button>

                    <button className='border rounded p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >All Sellers</button>

                    <button className='border rounded p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >All Buyers</button>

                    <button className='border rounded p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >Reported Products</button>
                </>
            }
            {
                accType === 'Buyer'&&
                <>
                    <button className='border rounded p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >My Orders</button>
                </>
            }
            {
                accType === "Seller" &&
                <>
                    <button className='border rounded p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >My Products</button>

                    <button className='border rounded p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >Add Products</button>

                    <button className='border rounded p-4 w-full bg-blue-300 hover:bg-blue-500 hover:text-white text-black font-serif text-xl' >My Buyers</button>
                </>
            }
        </div>
    );
};

export default Sidebar;