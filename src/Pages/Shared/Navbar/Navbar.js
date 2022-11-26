import React, { useContext,  useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaUser } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { AuthContext } from '../../../AuthContext/AuthProvider';


const Navbar = () => {

    

    const {user , logOut, setLoading, setIsAdmin } = useContext(AuthContext);

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();



    

    const handleLogOut = () => {
        logOut()
            .then(() => { 
              setLoading(false);
              setIsAdmin(false)
              navigate('/')
             })
            .catch(error => console.error(error))
    };
    return (
        <nav className={` flex justify-between items-center w-full bg-[#1877F2] h-[70px] px-10 shadow-gray-300 ${open? 'mb-72' : 'mb-4'} border-b-1`}>
          <div>
            <Link to='/' className='lg:text-5xl sm:text-4xl text-2xl text-yellow-100 font-serif sm:text-start md:flex lg:flex xl:flex '>Swap Laptop</Link>
            
          </div>


            
            <div className={`lg:text-xl md:text-xl text-lg flex gap-4 absolute md:static ${open? 'top-20 hover:border flex flex-col bg-[#01141F] ml-[-40px] w-full': 'top-[-400px]'}`}>
                            
                           {user ?
                            
                           <div className='flex gap-3 justify-center items-center w-full'>
                           
                            {user.photoURL ? 
                              <img title={user.displayName} className='w-[50px] h-[50px] rounded-full border border-yellow-100' src={user?.photoURL} alt="" />
                              :
                              <FaUser title={user.displayName} className='w-[50px] h-[50px] rounded-full text-yellow-100'></FaUser>
                            }
                            <button className=' rounded-lg py-1 text-yellow-100 px-2 hover:border' onClick={handleLogOut}>Log out</button>
                           </div>
                           :
                           <div className='flex gap-3 items-center justify-center w-full'>
                            <button className=' rounded-lg py-1 px-2 hover:border'><NavLink to='/login' className={({isActive}) => isActive ? 'text-blue-500' : 'text-yellow-100'}>LogIn</NavLink></button>

                            <button className=' rounded-lg py-1 px-2 hover:border'><NavLink to='/register' className={({isActive}) => isActive ? 'text-blue-500' : 'text-yellow-100'}>Register</NavLink></button>
                           </div>
                           }
            </div>



          <div className={`lg:text-xl md:text-xl text-lg flex gap-4 absolute md:static ${open? 'top-[138px] flex flex-col bg-[#01141F] ml-[-40px] w-full': 'top-[-400px]'}`} >

              <button className=' rounded-lg py-1 px-2 hover:border'><NavLink to='/dashboard' className={({isActive}) => isActive ? 'text-blue-500' : 'text-yellow-100'}>Dashboard</NavLink></button>

              <button className=' rounded-lg py-1 px-2 hover:border'><NavLink to='/blog' className={({isActive}) => isActive ? 'text-blue-500' : 'text-yellow-100'}>Blog</NavLink></button>

              
          </div>
          <div className='md:hidden h-7 w-7 text-yellow-100' onClick={() => setOpen(!open)}>
            {
              open ? <ImCross className='w-full h-full'></ImCross> : <FaBars className='w-full h-full'></FaBars>
            }
          </div>
        </nav>
    );
};

export default Navbar;