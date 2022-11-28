import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const [sellers, setSellers] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API}/allsellers`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data=>{
            if(data.success){
                setSellers(data.data)
            }
        })
    },[loading])


    const handleDelete = (id) =>{
        const confirm = window.confirm();
        if(confirm){
            fetch(`${process.env.REACT_APP_API}/allsellers?id=${id}`,{
            method: 'POST',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.success){
                toast.success('Successfully Delted the Seller');
                setLoading(false)
            }
        })
        }
    };


    return (
        <>
           {
            sellers.length === 0 ? 
                <div className='grid place-items-center h-screen flex-1'><h1 className='text-5xl font-semibold font-serif text-red-300'>No Data Found</h1></div> 
                : 
                <div className="overflow-x-autocborder flex-1 p-3 w-full">
                <table className="table w-full">
                    
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map((user,i)=>{
                                return <tr className="hover">
                                    <th>{i+1}</th>
                                    <td><div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img title={user.user} src={user.image} alt=""/>
                                        </div>
                                        </div>
                                    </td>
                                    <td>{user.name}</td>
                                    <td><button onClick={()=>handleDelete(user._id)} className='btn btn-sm bg-red-400'>Delete</button></td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
           }
        </>
    );
};

export default AllSellers;