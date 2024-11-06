import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import CatagorisBtn from './CatagorisBtn'
import Navbar from './Navbar'
import Ulnavbar from './Ulnavbar'
import Banner from './Banner/Banner'
import CardTitle from './CardTitle'

export default function Home() {
  const data = useLoaderData()
  // console.log(data)
  return (
    <div>

     <Banner></Banner>
    

    



    


      <div className='flex gap-4 border-2'>

       <div className=' mt-500px'>
       <CardTitle></CardTitle>
       </div>
        <div className='flex flex-col gap-5  mt-[400px] bg-purple-100 rounded-xl shadow-xl  text-black  w-52 h-[540px] '>
        
          {
            data.map((btn, index) => <CatagorisBtn key={index} btn={btn}></CatagorisBtn>)

          }
        </div>

        <div>
          <Outlet></Outlet>
        </div>
      </div>

    </div>
  )
}
