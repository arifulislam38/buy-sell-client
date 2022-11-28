import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import UseTitle from '../../Hooks/Title/Title';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [addError, setAddError] = useState('');
    const navigate = useNavigate();

    UseTitle('Add Product');


    const handleAdd = data =>{
        const {name, description, image, category,location, originalPrice, resellPrice, duration} = data;
        const time = new Date().toLocaleDateString();
        const picture = image[0];
        const formData = new FormData();
        formData.append('image',picture);
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_Imagebb}`,{
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imagedata=> {
            if(imagedata.success){
                setAddError('');
                const product = {
                    name, description, image: imagedata.data.url, category,location, originalPrice, resellPrice, duration, seller: user?.email , time, buyer: '', wish: '', report: '', status: 'unsold'
                };

                fetch(`${process.env.REACT_APP_API}/addproduct`,{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
                .then(res=> res.json())
                .then(data => {
                    if(data.success){
                        toast.success('Successfully added product')
                        navigate('/dashboard/myproducts');
                    }
                })
            }
        });
        
        
    }

    return (
        <div className='flex-1 grid place-items-center w-full h-screen'>
            <form className='lg:w-[80%] sm:w-[95%]' onSubmit={handleSubmit(handleAdd)}>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>


                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <input type="text" {...register("description", {
                            required: "Description is Required"
                        })} className="input input-bordered w-full" />
                        {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Category</span></label>
                        <select {...register("category", {
                            required: "category is required"
                        })} className="select select-bordered w-full">
                            <option>hp</option>
                            <option>dell</option>
                            <option>asus</option>
                        </select>
                        {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "location is Required"
                        })} className="input input-bordered w-full" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">OriginalPrice</span></label>
                        <input type="text" {...register("originalPrice", {
                            required: "OriginalPrice is Required"
                        })} className="input input-bordered w-full" />
                        {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                    </div>


                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">ResellPrice</span></label>
                        <input type="text" {...register("resellPrice", {
                            required: "ResellPrice is Required"
                        })} className="input input-bordered w-full" />
                        {errors.resellPrice && <p className='text-red-500'>{errors.resellPrice.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Uses Duration</span></label>
                        <select {...register("duration", {
                            required: "Duration is required"
                        })} className="select select-bordered w-full">
                            <option>2 Months</option>
                            <option>4 Months</option>
                            <option>6 Months</option>
                            <option>9 Months</option>
                            <option>1 Year</option>
                        </select>
                        {errors.duration && <p className='text-red-500'>{errors.duration.message}</p>}
                    </div>


                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Your Image</span></label>
                        <input type="file" {...register("image", {
                            required: "Image Not Given"
                        })} className="file-input file-input-bordered w-full" />
                        {errors.password && <p className='text-red-500'>{errors.image.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {addError && <p className='text-red-600'>{addError}</p>}
                </form>
        </div>
    );
};

export default AddProduct;