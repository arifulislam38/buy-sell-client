import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthContext/AuthProvider';


const MyProducts = () => {
    const {user} = useContext(AuthContext);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API}/myproducts?id=${user?.email}`)
        .then(res=> res.json())
        .then(data => {
            setProducts(data.data)
        })
    },[loading,user?.email]);


    const handleAdvertise = (id) =>{
        fetch(`${process.env.REACT_APP_API}/advertise?id=${id}`,{
            method: "PATCH"
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.success){
                setLoading(false)
                toast.success('success advertise')
            }
        })
    };


    return (
        <>
         {
            products.length === 0 &&
            <div className='h-screen w-full grid place-items-center'>
                <h1 className='text-5xl text-red-200 font-semibold font-serif'>No Products found for you</h1>
            </div> 
         }
         <div className='flex-1 w-full p-3 grid lg:grid-cols-2 gap-5'>
         {
            products?.map(product=>
            <div className='bg-violet-200 bg-opacity-30 relative p-3 h-auto'>
                <img className='w-[50%] mx-auto mb-1' src={product.image} alt="" />
                <h1 className='text-xl font-semibold'>{product.name}</h1>
                <div className='lg:absolute bottom-5 w-full'>
                    <button onClick={()=>handleAdvertise(product._id)} className='bg-blue-300 w-[60%] py-1 rounded'>Advertise</button>
                </div>
            </div>)
         }
        </div>
        </>
    );
};

export default MyProducts;