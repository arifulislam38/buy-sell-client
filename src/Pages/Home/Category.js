import React from 'react';


const Category = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-7 place-items-center px-10'>

            
            <div className="shadow-xl relative rounded-md">
                <img className='w-full rounded-md' src="https://placeimg.com/400/225/arch" alt="Shoes" />
                <div className="absolute top-0 p-6 bg-opacity-30 bg-gray-500 w-full h-full">
                    <h2 className="text-3xl text-white font-serif font-semibold mb-2">Asus Laptop</h2>
                    <p className='text-xl font-serif text-white'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="flex justify-end">
                        <button className="btn-sm rounded btn-primary">view</button>
                    </div>
                </div>
            </div>



            <div className="card  bg-base-100 shadow-xl image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>



            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;