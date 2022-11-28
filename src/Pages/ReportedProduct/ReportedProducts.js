import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ReportedProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API}/report`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data => {
            setProducts(data.data)
        })
    },[loading]);

    const handleDelete = (id) =>{
        const confirm = window.confirm();
        if(confirm){
            fetch(`${process.env.REACT_APP_API}/deletereport?id=${id}`,{
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
        }
    };

    return (
        <>
         {
            products.length === 0 ?
            <div className='flex-1 h-screen w-full grid place-items-center'>
                <h1 className='text-5xl text-red-200 font-semibold font-serif'>No Reported Products found</h1>
            </div> 
            :
         <div className='flex-1 w-full p-3 grid lg:grid-cols-2 gap-5'>
         {
            products?.map(product=>
            <div className='bg-violet-200 bg-opacity-30 relative p-3 max-h-96'>
                <img className='w-[50%] mx-auto mb-1' src={product.image} alt="" />
                <h1 className='text-xl font-semibold'>{product.name}</h1>
                <div className='lg:absolute bottom-5 w-full flex justify-center gap-3'>
                    <button onClick={()=>handleDelete(product._id)} className='bg-red-300 p-1 rounded'>Delete</button>
                </div>
            </div>)
         }
        </div>
        }
        </>
        
    );
    }


export default ReportedProducts;