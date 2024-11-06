// import React from 'react'
// import { Link, useLocation, useParams } from 'react-router-dom'
// import { FaCartShopping } from "react-icons/fa6";
// import { MdFavoriteBorder } from "react-icons/md";


// export default function Ulnavbar() {
//     const {
//         pathname} = useLocation()
    
//   return (
//     <div>

//         <nav className={`${pathname=='/'? "bg-blue-400" : "bg-white"}`}>
//            {/* main div */}
//            <div className='flex justify-between items-center px-32 py-9 '>
//             {/* logo */}
//             <div className='text-3xl font-semibold'>
//                 <Link>Gadget Heaven</Link>
//             </div>
//             <div className='flex gap-5 items-center text-xl font-medium'>
          
//                 <Link to='/'>Home</Link>
//                 <Link to='/statistics'>Statictis</Link>
//                 <Link to='/dashboard'>Dashboard</Link>
           
//             </div>
            
//             {/* icons */}
//             <div className='flex items-center gap-4 text-2xl text-purple-600 '>
//                 <span><FaCartShopping></FaCartShopping></span>
//                 <span><MdFavoriteBorder></MdFavoriteBorder></span>
//             </div>
//            </div>
//         </nav>
      
//     </div>
//   )
// }











import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";

export default function Ulnavbar() {
    const { pathname } = useLocation();
    
    return (
        <div>
            <nav >
                {/* main div */}
                <div className='flex justify-between items-center px-32 py-9'>
                    {/* logo */}
                    <div className='text-3xl font-semibold'>
                        <Link to='/'>Gadget Heaven</Link>
                    </div>
                    {/* navigation links */}
                    <div className='flex gap-5 items-center text-xl font-medium'>
                        <Link to='/' className={`${pathname === '/' ? "bg-gray-300 p-2 rounded" : ""}`}>
                            Home
                        </Link>
                        <Link to='/statistics' className={`${pathname === '/statistics' ? "bg-gray-300 p-2 rounded" : ""}`}>
                            Statistics
                        </Link>
                        <Link to='/dashboard' className={`${pathname === '/dashboard' ? "bg-gray-300 p-2 rounded" : ""}`}>
                            Dashboard
                        </Link>
                    </div>
                    {/* icons */}
                    <div className='flex items-center gap-4 text-2xl text-purple-600'>
                        <span><FaCartShopping /></span>
                        <span><MdFavoriteBorder /></span>
                    </div>
                </div>
            </nav>
        </div>
    )
}
