import React from 'react'
import image from '../Ulnavbar/banner.jpg'


export default function Banner() {
  return (
    <div>

        <div className=' relative bg-purple-500 w-[90%] mb-32 mx-auto h-[600px] rounded-xl  text-white'>
            {/* text div */}
            <div className='flex flex-col justify-center items-center  h-[40vh]'>
                <h1 className='text-5xl font-semibold'>Upgrade Your Tech Accessorize <br /> with 
                 Gadget  Heaven Accessories</h1>

                 <p className='mt-5 font-extralight text-lg '>Explore the latest gadgets that will take your experience to the next level. <br />
                  From smart devices to the coolest accessories, we have it all!</p>
                 <button className='px-11 mt-4 py-3 bg-white text-purple-600 rounded-lg text-lg font-medium'>Show!</button>
            </div>

                        
            <div  className='absolute left-[20%]'>
            {/* image */}

            <img className='w-[1000px] h-[563px] border-4 border-gray-200  rounded-xl shadow-md ' src={image} alt="" />

            </div>

            

           
        </div>

      
    </div>
  )
}

