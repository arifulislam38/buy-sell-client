import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthContext/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const [ordersData, setOrdersData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API}/myorders?email=${user?.email}`)
        .then(res => res.json())
        .then(data=>{
            if(data.success){
                setOrdersData(data.data)
            }
        })
    },[loading, user?.email]);

    // console.log(ordersData.length)

    const handleDelete = (id) =>{
        const confirm = window.confirm();
        if(confirm){
            fetch(`${process.env.REACT_APP_API}/myorders?id=${id}`,{
            method: 'POST'
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.success){
                toast.success('Successfully Delted the order');
                setLoading(false)
            }
        })
        }
    };
    return (
        
            <>
           {
            ordersData.length === 0 ? 
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
                            ordersData?.map((user,i)=>{
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

export default MyOrders;