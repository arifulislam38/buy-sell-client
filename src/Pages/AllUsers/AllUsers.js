import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API}/allusers`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data=>{
            if(data.success){
                setUsers(data.data)
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
        
            <div className="overflow-x-autocborder flex-1 p-3">
                <table className="table w-full">
                    
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Action</th>

                    </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user,i)=>{
                                return <tr className="hover">
                                    <th>{i+1}</th>
                                    <td><div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img title={user.user} src={user.image} alt=""/>
                                        </div>
                                        </div>
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.type}</td>
                                    <td><button onClick={()=>handleDelete(user._id)} className='btn btn-sm bg-red-400'>Delete</button></td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        
    );
};

export default AllUsers;