import React from 'react'
import { Link } from 'react-router-dom'

export default function Category({categoryItem }) {

    const {image,id, title, description,price} = categoryItem
    return (
        <div>

            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className='w-80 h-56 object-contain rounded-lg'
                        src={image} />
                </figure>
                <div className="card-body">
                    <h3>Prices: {price}$</h3>
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-first">
                        <Link to={`/AllData/${id}`} className=" px-7 py-3 rounded-lg border-2 border-purple-600">View Details</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
