import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar,FaStarHalfAlt,FaRegStar } from 'react-icons/fa';
import Slider from "../slider/Slider";
import Offer from "../slider/Offer";


const ShowProduct = () => {
    const productdata = useLoaderData();

    


    return (
        <div >
         <div className="grid grid-cols-1 lg:flex gap-5" >
        <div className="lg:w-[600px] lg:h-[400px]"> <Slider></Slider></div>
        <div><Offer></Offer></div>
         </div>
            <h1 className=" py-7 text-center">see the product here: {productdata.length}</h1>
             <div className="grid lg:grid-cols-2 gap-7 lg:w-[80%] mx-auto lg:pl-24 py-10 bg-green-100">
             {
                productdata.length > 0 ?  ( productdata.map(product =>(
                       <div key={product._id}>
                           <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-80 w-[90%]" src={product.photo} alt="Shoes" /></figure>
                         <div className="card-body">
                        <h2 className="card-title">Name: { product.name}</h2>
                         <p>Brand : {product.brand}</p>
                        <p>Type: {product.type}</p>
                        <p>Price: {product.price}</p>
                        <p>
                        <Rating
                         placeholderRating={1}
                         placeholderSymbol={<FaStarHalfAlt className="icon" />}
                         emptySymbol={<FaStar className="icon" />}
                         fullSymbol={<FaRegStar className="icon" />}      
                    />
                      </p>

                        <p><Link to={`/seeDetails/${product._id}`}> <button className="btn mb-5">See details</button> </Link></p>
                        <p>
                          <Link to={`/update/${product._id}`}>
                          <button className="btn">update</button>
                          </Link>
                        </p>

                           </div>
                         </div>
                        </div> 
                    ))
                  ) : (
                    <div>
                        <p className=" text-5xl text-center font-bold"> No product <br /> available</p>
                    </div>
                  )
                } 
            </div> 
        </div>
    );
};

export default ShowProduct;