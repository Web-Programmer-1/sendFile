





import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaBabyCarriage } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import bannerimage from '../assets/banner.jpg'

export default function Navbar() {
  return (
    

    <header>
      <div className='w-[90%] h-[720px] mx-auto bg-purple-600 text-white mt-4 rounded-2xl'>

        
        <div className='flex justify-between items-center px-20 py-7 '>
          {/* logo */}
          <div>
            <h1 className='text-2xl font-semibold'>Gadget Heaven</h1>

          </div>
          {/* nav */}
          <div className='flex items-center text-xl font-medium gap-9'>
            <Link>Home</Link>
            <Link>Statictis</Link>
            <Link>Dashboard</Link>

          </div>

          {/* icons */}
          <div className='flex items-center gap-6 text-xl font-medium'>
            <span><FaBabyCarriage></FaBabyCarriage></span>
            <span><GiSelfLove></GiSelfLove></span>
          </div>
       

        </div>

      
        <div className='text-center mt-20 '>
            <h1 className='text-[56px] font-bold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className='text-xl font-light'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className='mt-4 px-9 py-3 rounded-md text-lg font-semibold  bg-white text-purple-700'>Shop Now!</button>

          </div>

          <div >
            <img className='mt-7 border-4 border-x-white rounded-xl w-[1024px] h-[523px] object-cover mx-auto' src={bannerimage} alt="" />
            
          </div>
       

      </div>  
    </header>
  );
}
