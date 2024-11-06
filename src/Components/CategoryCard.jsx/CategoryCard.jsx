import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Category from '../Category'

export default function CategoryCard() {
    const categoryData = useLoaderData()
    const {categoryId} = useParams()
    // console.log(categoryId)

     const [category , setcategory] = useState([])
     console.log(category)
    //  useEffect(() => {

    //       if(categoryId){
            
    //     categoryData.filter(category => category.categoryId === parseInt(categoryId))
    //     setcategory(categoryData)
    //       }
    //       else{
    //         setcategory(categoryData )
    //       }

    //  }, [categoryData, categoryId])

    useEffect(() => {
      if (categoryId) {
          const filteredCategory = [...categoryData].filter(category => category.category == (categoryId));
          setcategory(filteredCategory);
      } else {
          setcategory(categoryData);
      }
  }, [categoryData, categoryId]);
  
  return (
    <div className='grid grid-cols-3 gap-6  mt-80'>

        {
            category?.map( categoryItem => <Category categoryItem={categoryItem}></Category> )
        }
      
    </div>
  )
}
