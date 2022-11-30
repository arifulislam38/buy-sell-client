import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import Spinner from '../spinner/Spinner';

const MyOrders = () => {
    const {user,accType} = useContext(AuthContext);
    const [ordersData, setOrdersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [spin, setSpin] = useState(false);
    const navigate = useNavigate();

    if(accType !== 'Buyer'){
        navigate('/')
    };

    useEffect(()=>{
        setSpin(true)
        fetch(`${process.env.REACT_APP_API}/myorders?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data=>{
            if(data.success){
                setOrdersData(data.data)
                setSpin(false)
            }
        })
    },[loading, user?.email]);

    // console.log(ordersData.length)

    const handleDelete = (id) =>{
        const confirm = window.confirm();
        if(confirm){
            fetch(`${process.env.REACT_APP_API}/myorders?id=${id}`,{
            method: 'POST',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.success){
                setLoading(false)
                toast.success('Successfully Deleted the order');
                
            }
        })
        }
    };

    if(spin){
        return <div className='flex-1 w-full h-screen grid place-items-center'><Spinner></Spinner></div>
    }


    return (
        
            <>
           {
            ordersData.length === 0 ? 
                <div className='grid place-items-center h-screen flex-1 w-full'><h1 className='text-5xl font-semibold font-serif text-red-300'>No Data Found</h1></div> 
                : 
                <div className="overflow-x-autocborder flex-1 p-3 w-full grid lg:grid-cols-2 gap-5">
                {
                    ordersData?.map(orders=> <div className="card bg-base-100 shadow-xl">
                        <figure><img src={orders.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            {orders.name}
                            </h2>
                            <p>
                                <span className='bg-slate-400 rounded px-1 mr-2'>Regular Price: {orders.originalPrice}</span>
                                <span className='bg-slate-400 rounded px-1'>Selling Price: {orders.resellPrice}</span>
                            </p>
                            <div className="card-actions justify-end">
                                <div onClick={()=>handleDelete(orders._id)} className="badge badge-outline bg-red-300 p-3 cursor-pointer">Delete</div> 
                                <div className="badge badge-outline bg-blue-400 cursor-pointer p-3"><Link to={`/payment/${orders._id}`}>Pay</Link></div>
                            </div>
                        </div>
                        </div>
                    )
                }
            </div>
           }
        </>
        
        
    );
};

export default MyOrders;