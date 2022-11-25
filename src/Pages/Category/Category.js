import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaLess } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import DisplayModal from './DisplayModal';

const Category = () => {
    const data = useLoaderData();
    const products = data.data;
    const {user} = useContext(AuthContext);
    const [product, setProduct] = useState({});
    const [modal, setModal] = useState(false);
    // const { register, handleSubmit, formState: { errors } } = useForm();


    const handleSubmit = (event) =>{
        event.preventDefault();
        toast.success('Your item is Booked');
        setModal(false)
    }

    
// console.log(laptop)
    return (
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
                            <p><span className='bg-gray-300 px-2 text-xl rounded'>Seller: {product.seller.email}</span></p>
                            <div className='flex gap-7'>
                                <button className='btn btn-sm bg-red-400 border-0'>Add to Wishlist</button>
                                <button className='btn btn-sm bg-slate-400 border-0 text-black'>Report</button>
                            </div>
                            <label onClick={()=>{setProduct(product);setModal(true)}} htmlFor="bookingModal" className="btn bg-blue-600 py-2 rounded-sm text-2xl font-serif font-semibold border-0">Book Now</label>
                        </div>
                        
                    </div>

                    
                })
            }

            { modal &&
                <DisplayModal product={product} setModal={setModal} user={user} handleSubmit={handleSubmit}></DisplayModal>
            }
                                
        </div>
    );
};

export default Category;