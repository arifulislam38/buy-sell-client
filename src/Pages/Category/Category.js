import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiBadgeCheck } from 'react-icons/bi';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import DisplayModal from './DisplayModal';

const Category = () => {
    const data = useLoaderData();
    const products = data.data;
    const {user, setLoading} = useContext(AuthContext);
    const [product, setProduct] = useState({});
    const [formdata, setFormdata] = useState({});
    const [modal, setModal] = useState(false);
    // const { register, handleSubmit, formState: { errors } } = useForm();


    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const data ={
            phone: form.phone.value,
            mlocation: form.location.value
        };
        setFormdata(data)
        setModal(false)
    };

    const handleOrder = (id) =>{
        const product = {...formdata};
        // product.buyer = user?.email;
        fetch(`${process.env.REACT_APP_API}/order?id=${id}&email=${user?.email}`,{
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.success){
                toast.success('Successfully Booked')
                setLoading(false)
            }
            else{
                toast.error(data.message)
            }
        })
    }

    const handleWishList = (id) =>{
        fetch(`${process.env.REACT_APP_API}/wishlist?id=${id}&email=${user.email}`,{
            method: 'POST',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data => {
            if(data.success){
                toast.success('Successfully added to the wishlist');
                setLoading(false)
            }
        })
    };


    const handleReport = (id) =>{
        fetch(`${process.env.REACT_APP_API}/report?id=${id}&email=${user.email}`,{
            method: 'POST',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data => {
            if(data.success){
                toast.success('Successfully informed to the admin about this product')
            }
        })
    };

    
// console.log(laptop)
    return (
        <>
        {
            products.length === 0 &&
                <div className='w-full h-screen flex justify-center items-center'>
                    <h1 className='text-blue-300 text-5xl font-semibold font-serif'>All Products are solded</h1>
                </div>
        }
        <div className='px-10 flex flex-col gap-5'>
            {
                products?.map(product=>{
                    return <div key={product._id} className='grid lg:grid-cols-2 place-items-center gap-4 p-3 bg-gray-100 bg-opacity-50'>
                        <div className=''>
                            <img src={product.image} alt="" />
                        </div>
                        <div className=' p-3 text-start flex flex-col gap-4'>
                            <h1 className='text-2xl'>{product.name}</h1>
                            <p>{product.description}</p>
                            <div className='flex gap-3'><span className='bg-gray-300 px-2 rounded'>Regular Price: Tk {product.originalPrice}</span> <span className='bg-gray-300 px-2 rounded'>Resell Price: Tk {product.resellPrice}</span></div>
                            <p>Location: {product.location}</p>
                            <p>Total Usages: {product.duration}</p>
                            <p>Posted Date: {product.time}</p>
                            <p className='flex items-center'><span className='bg-gray-300 px-2 text-xl rounded'>Seller: {product.seller.email}</span>  {product.seller.verified && <BiBadgeCheck className='inline ml-2 text-3xl bg-blue-700 rounded-full'></BiBadgeCheck>}</p>
                            <div className='flex gap-7'>
                                <button onClick={()=>handleWishList(product._id)} className='btn btn-sm bg-red-400 border-0'>Add to Wishlist</button>
                                <button onClick={()=>handleReport(product._id)} className='btn btn-sm bg-slate-400 border-0 text-black'>Report</button>
                            </div>
                            <label onClick={()=>{setProduct(product);setModal(true)}} htmlFor="bookingModal" className="btn bg-blue-600 py-2 rounded-sm text-2xl font-serif font-semibold border-0">Book Now</label>
                        </div>
                        
                    </div>

                    
                })
            }

            { modal &&
                <DisplayModal product={product} setModal={setModal} user={user} handleSubmit={handleSubmit} handleOrder={handleOrder}></DisplayModal>
            }
                                
        </div>
        </>
    );
};

export default Category;