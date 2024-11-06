




import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { BiSolidCartAdd } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";

export default function AllData() {
  const loaderData = useLoaderData();
  const [alldata, setalldata] = useState(null); // Set initial state to `null` for conditional rendering
  const { categoryId } = useParams();

  useEffect(() => {
    const findData = loaderData.find(data => data.id == categoryId); // Use `==` for type coercion if necessary
    setalldata(findData);
  }, [loaderData, categoryId]); // Add dependencies

  if (!alldata) {
    // Conditional rendering until `alldata` is loaded
    return <p>Loading...</p>;
  }

  const { title, price, category, image, description, specification, availability, rating } = alldata;

  return (
    <div>
      <div className='bg-purple-500 rounded-lg w-[93%] h-[450px]'>

        <div className='text-white h-[22vh] flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-semibold'>Product Details</h1>
          <p className='mt-3 text-lg font-extralight'>
            Explore the latest gadgets that will take your experience to the next level. <br />
            From smart devices to the coolest accessories, we have it all!
          </p>
        </div>

        <div className='w-[65%] bg-slate-100 h-[500px] mx-auto flex justify-center gap-9 rounded-lg shadow-lg'>
          <div className='mt-10'>
            <img className='w-[370px] rounded-lg h-[330px] object-cover' src={image} alt={title} />
          </div>

          <div className='mt-10 space-y-2'>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <h3 className='text-lg font-medium opacity-[90%]'>Price: {price}$</h3>
            <h3 className='text-xl font-semibold'>Category: {category}</h3>
            <p className='text-lg font-extralight'>{description}</p>
            
            {specification && (
              <div>
                <h1 className='text-2xl font-semibold'>Specification</h1>
                {specification.map((spec, index) => (
                  <li key={index} className='text-lg font-medium opacity-[65%]'>{spec}</li>
                ))}
              </div>
            )}

            <h3 className='text-[17px] font-medium'>Availability: {availability ? "Product available" : "Not Found"}</h3>
           <div className='flex gap-2 text-lg items-center font-medium '>
            <span>Rating:</span>
           <h3 className='text-[15px] font-medium'> {rating}</h3>
           <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
        
           </div>
           <div className='flex justify-between items-center mt-3'>
          <button className='flex px-6 py-2 rounded-lg text-white bg-purple-500 gap-2 items-center text-lg font-medium'>
            <span>Add To Cart</span>
            <span><BiSolidCartAdd></BiSolidCartAdd></span>
          </button>
          <div>
            <span className='text-xl font-semibold bg-red-500'><MdFavoriteBorder></MdFavoriteBorder></span>
          </div>
        </div>
           
       

  

         

          </div>
        </div>
      </div>
    </div>
  );
}
