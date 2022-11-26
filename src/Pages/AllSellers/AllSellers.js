import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllSellers = () => {
    const data = useLoaderData();
    const sellers = data.data;
    console.log(sellers.length);
    return (
        <div>
           {
            sellers.length === 0 ? 
                <div></div> 
                : 
                <div></div>
           }
        </div>
    );
};

export default AllSellers;