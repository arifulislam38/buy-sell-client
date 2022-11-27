import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import UseTitle from '../../Hooks/Title/Title';
import Lottie from 'react-lottie';
import * as animationData from '../Login/login.json';
import { useForm } from 'react-hook-form';


const Register = () => {
    const {createUser,updateUser, googleLogin, setLoading} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUPError] = useState('');

    UseTitle('Register');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
    //   rendererSettings: {
    //     preserveAspectRatio: 'xMidYMid slice'
    //   }
    };


    const handleSignUp = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image',image);
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_Imagebb}`,{
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imagedata=> {
            if(imagedata.success){
                setSignUPError('');
            createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name,
                    photoURL: imagedata.data.url
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email,imagedata.data.url,data.type);
                        setLoading(false)
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
        }
    })
        
    };

    const saveUser = (name, email,image,aType = 'Buyer') =>{
        const user ={
            name, 
            email,
            type: aType,
            image,
            role: ''
        };
        console.log(user)
        fetch(`${process.env.REACT_APP_API}/createuser`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        
                        if(data.success){
                            localStorage.setItem('accessToken', data.token);
                            
                            toast.success('successfully login');
                            navigate(from, { replace: true });
                            setLoading(false);
                            
                        }else{
                            toast.error('CanNot log in user')
                        }
                    });
    };



    const googleSignUp = () =>{
        googleLogin()
        .then(result => {
            setSignUPError('');
            const user = result.user;
            saveUser(user.displayName, user.email, user.photoURL);
        })
        .catch(err => {
            setSignUPError(err.message)
        })
    }

    
    return (
        <div>
            <h1 className='text-7xl font-bold font-serif text-center text-yellow-100 mb-32 pt-24'>Welcome to the Register page</h1>
            <div className='grid lg:grid-cols-2 gap-8 p-8 items-center justify-center lg:w-[85%] mx-auto'>
                <div className='sm:mb-5'>
                    <Lottie options={defaultOptions}></Lottie>
                </div>
                <div className='p-4'>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>


                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>


                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" }
                        })} className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>


                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Your Image</span></label>
                        <input type="file" {...register("image", {
                            required: "Image Not Given"
                        })} className="file-input file-input-bordered w-full" />
                        {errors.password && <p className='text-red-500'>{errors.image.message}</p>}
                    </div>


                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Account Type</span></label>
                        <select {...register("type", {
                            required: "Account Type is required"
                        })} className="select select-bordered w-full">
                            <option>Buyer</option>
                            <option>Seller</option>
                        </select>
                        {errors.password && <p className='text-red-500'>{errors.type.message}</p>}
                    </div>


                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={googleSignUp} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Register;