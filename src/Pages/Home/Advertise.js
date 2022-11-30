import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Spinner from '../spinner/Spinner';

const Advertise = () => {
    const [products, setProducts] = useState([]);
    const [spin, setSpin] = useState(false);

    useEffect(()=>{
        setSpin(true)
        fetch(`${process.env.REACT_APP_API}/advertise`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data => {
            setProducts(data.data)
            setSpin(false)
        })
    },[])

    if(products?.length === 0){
        return <></>
    }

    if(spin){
        return <div className='flex-1 w-full h-screen grid place-items-center'><Spinner></Spinner></div>
    }


    return (
        <section className='my-20'>
            <div className='w-full text-start px-10 mb-20'>
                <div className="divider"><h1 className='text-4xl font-semibold font-serif'>Advertisements</h1></div>
            </div>

            <div className={`px-10 grid gap-5 rounded-md ${products?.length ===1 && 'lg:grid-cols-1 '} ${products?.length ===2 && 'lg:grid-cols-2 '} ${products?.length >= 3 && 'lg:grid-cols-3 '}`}>
            {
                products?.map((product,i)=><div key={i} className="card card-compact grid place-items-center bg-base-100 shadow-xl rounded-sm hover:scale-105 duration-500">
                <figure><img src={product.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description.length > 100 ? product.description.slice(0,100) + '....': product.description}</p>
                    <div className="card-actions justify-end">
                    
                    </div>
                </div>
            </div>)
            }
        </div>
        </section>
    );
};

export default Advertise;