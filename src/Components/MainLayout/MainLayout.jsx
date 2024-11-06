import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import CatagorisBtn from '../CatagorisBtn'
import Ulnavbar from '../Ulnavbar'
import Banner from '../Banner/Banner'

export default function MainLayout() {
  return (
        <div>
        {/* <Navbar></Navbar>  */}
        <Ulnavbar></Ulnavbar>
        
        <div className='min-h-[calc(100vh-232px)] container mx-auto'>


    <Outlet></Outlet>
    </div>
     
    
      
    </div>
  )
}
