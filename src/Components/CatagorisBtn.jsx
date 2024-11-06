import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CatagorisBtn({btn}) {
    // console.log(btn.category)
  return (
    <div>
      
          {/* main div */}
        <div className='mt-7 mx-auto ml-6'>
          
            <NavLink  to={`/category/${btn.category}`} className='px-8 py-3 rounded-lg bg-gray-300  mt-4' >{btn.category}</NavLink>
        </div>


    </div>
  )
}

