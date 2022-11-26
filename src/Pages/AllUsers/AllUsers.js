import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllUsers = () => {
    const data = useLoaderData();
    const users = data.data;
    console.log(data.data);
    return (
        
            <div className="overflow-x-autocborder flex-1 p-3">
                <table className="table w-full">
                    
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>admin</th>
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
                                    <td className='text-xl font-semibold'>{user.name}</td>
                                    <td><button className='btn btn-sm bg-blue-500'>Make Admin</button></td>
                                    <td><button className='btn btn-sm bg-red-400'>Delete</button></td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        
    );
};

export default AllUsers;