import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Spinner from '../spinner/Spinner';

const AllBuyers = () => {
    const [buyers, setBuyers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [spin, setSpin] = useState(false);

    useEffect(()=>{
        setSpin(true);
        fetch(`${process.env.REACT_APP_API}/allbuyers`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data=>{
            if(data.success){
                setBuyers(data.data)
                setSpin(false)
            }
        })
    },[loading])


    const handleDelete = (id) =>{
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
    };

    if(spin){
        return <div className='flex-1 w-full h-screen grid place-items-center'><Spinner></Spinner></div>
    }

    return (
        <>
           {
            buyers.length === 0 ? 
                <div className='grid place-items-center flex-1 h-screen'><h1 className='text-5xl font-semibold font-serif text-red-300'>No Data Found</h1></div> 
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
                            buyers?.map((user,i)=>{
                                return <tr className="hover">
                                    <th>{i+1}</th>
                                    <td><div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img title={user.user} src={user.image} alt=""/>
                                        </div>
                                        </div>
                                    </td>
                                    <td>{user.name}</td>
                                    
                                    <td><button onClick={()=>handleDelete(user._id)} className='rounded-lg p-1 bg-red-400'>Delete</button></td>
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

export default AllBuyers;