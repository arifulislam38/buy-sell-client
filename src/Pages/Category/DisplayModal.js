import React, { useState } from 'react';
import toast from 'react-hot-toast';

const DisplayModal = ({product,setModal,user,handleSubmit}) => {

    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    return (
        <>


            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box h-auto relative">
                <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2 p-3'>
                    <input className='w-full border rounded px-3 text-xl text-black' type="text" defaultValue={user?.displayName} readOnly/>

                    <input className='w-full border rounded px-3 text-xl text-black' type="text" defaultValue={user?.email} readOnly/>

                    <input className='w-full border rounded px-3 text-xl text-black' type="text" defaultValue={product.name} readOnly/>

                    <input className='w-full border rounded px-3 text-xl text-black' type="text" defaultValue={product.resellPrice} readOnly/>

                    <input onChange={(event)=>setPhone(event.target.value)} placeholder='Your Phone Number' name='phone' className='w-full border rounded px-3 text-xl text-black' type="tel" required />

                    <input onChange={(event)=>setLocation(event.target.value)} placeholder='Meeting Location' name='location' className='w-full border rounded px-3 text-xl text-black' type="text" required />

                    <input className='w-full text-xl bg-blue-600 cursor-pointer text-white p-1 rounded-sm' type="submit" value="Submit" disabled={phone&& location ? false: true} />
                </form>
                
            </div>
            </div>
        </>
    );
};

export default DisplayModal;