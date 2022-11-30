import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import Spinner from '../spinner/Spinner';


const MyProducts = () => {
    const {user,accType} = useContext(AuthContext);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [spin, setSpin] = useState(false);
    const navigate = useNavigate();


    if(accType !== 'Seller'){
        navigate('/')
    };

    useEffect(()=>{
        setSpin(true)
        fetch(`${process.env.REACT_APP_API}/myproducts?id=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data => {
            setProducts(data.data)
            setSpin(false)
        })
    },[loading,user?.email]);


    const handleAdvertise = (id) =>{
        fetch(`${process.env.REACT_APP_API}/advertise?id=${id}`,{
            method: "PATCH",
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.success){
                setLoading(false)
                toast.success('success advertise')
            }
        })
    };

    const handleDelete = (id) =>{
        fetch(`${process.env.REACT_APP_API}/advertise?id=${id}`,{
            method: "POST",
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.success){
                setLoading(false)
                toast.success('Deleted successfully')
            }
        })
    };


    if(spin){
        return <div className='flex-1 w-full h-screen grid place-items-center'><Spinner></Spinner></div>
    }


    return (
        <>
         
        {
            products?.length === 0 ?
            <div className='h-screen w-full grid place-items-center flex-1'>
                <h1 className='text-5xl text-red-200 font-semibold font-serif'>No Products found for you</h1>
            </div> 
        
         :
         <div className='flex-1 w-full p-3 grid lg:grid-cols-2 gap-5'>
         {
            products?.map(product=>
            <div className='bg-violet-200 bg-opacity-30 relative p-3 max-h-96'>
                <img className='w-[50%] mx-auto mb-1' src={product.image} alt="" />
                <h1 className='text-xl font-semibold'>{product.name}</h1>
                <div className='lg:absolute bottom-5 w-full flex justify-center gap-3'>
                    {
                        product.status === 'sold'?
                        <h1 className='text-blue-600 text-xl font-serif'>Sold</h1>
                        :
                        <button className='bg-blue-300 p-1 rounded'>Unsold</button>
                    }

                    <button onClick={()=>handleAdvertise(product._id)} className='bg-blue-300 p-1 rounded'>Advertise</button>

                    <button onClick={()=>handleDelete(product._id)} className='bg-red-300 p-1 rounded'>Delete</button>
                </div>
            </div>)
         }
        </div>
        }
        </>
    );
};

export default MyProducts;