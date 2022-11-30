import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import Spinner from '../spinner/Spinner';

const WishList = () => {

    const {user, accType} = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [spin, setSpin] = useState(false);
    const navigate = useNavigate();

    if(accType !== 'Buyer'){
        navigate('/')
    };

    useEffect(()=>{
        setSpin(true)
        fetch(`${process.env.REACT_APP_API}/wishlist?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data => {
            setProducts(data.data)
            setSpin(false)
        })
    },[user?.email]);

    

    if(spin){
        return <div className='flex-1 w-full h-screen grid place-items-center'><Spinner></Spinner></div>
    }

    

    return (
        <div className='flex-1 w-full p-3 grid lg:grid-cols-2 gap-5'>
            {
                products?.map((product,i)=><div key={i} className='bg-violet-200 bg-opacity-30 relative p-3 max-h-96 flex flex-col gap-5'>
                <img className='w-[50%] mx-auto mb-1' src={product.image} alt="" />
                <h1 className='text-xl font-semibold'>{product.name}</h1>
                <p>{product.description.length > 100 ? product.description.slice(0,100) + '....' : product.description}</p>
                <div className='flex gap-2 w-full justify-center'>
                    <span className='px-2 rounded-sm bg-slate-300'>Original Price: {product.originalPrice}</span>
                    <span className='px-2 rounded-sm bg-slate-300'>Resell Price: {product.resellPrice}</span>
                </div>
                
            </div>)
            }
        </div>
    );
};

export default WishList;