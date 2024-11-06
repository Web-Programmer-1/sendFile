import React from 'react'
import notFound from '../Components/Ulnavbar/found.jpg.jpg'

export default function Statistics() {
  return (
    <div>
     


     {/* navbar */}
    

     <div className=' relative bg-purple-500 w-[90%] mb-32 mx-auto h-[600px] rounded-xl  text-white'>
            {/* text div */}
            <div className='flex flex-col justify-center items-center  h-[40vh]'>
                <h1 className='text-5xl font-semibold'> Statistics Page
                </h1>

                 <p className='mt-5 font-extralight text-lg '>Content statistics reveal insightful patterns in user engagement, showing top-performing topics, <br />
                  peak interaction times, audience preferences, and content trends. These insights guide data-driven improvements.</p>
          =
            </div>

           
        </div>

        <div className='w-[100%] h-[500px] '>
        <h1 className='text-2xl font-medium'>Statistics page here!</h1>
          <img className='mx-auto' src={notFound} alt="" />



        </div>

        {/* footer section */}

        <div>
        <footer className="footer bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Web Devlopment</h6>
    <a className="link link-hover">Machine Learning</a>
    <a className="link link-hover">Cyber securirty</a>
    <a className="link link-hover">Software engineer</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>

    </div>
  )
}
