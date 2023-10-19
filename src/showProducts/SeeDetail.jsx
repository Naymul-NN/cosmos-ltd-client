import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const SeeDetail = () => {
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/carts')
        .then(res=>res.json())
        .then(data=> setCart(data))
    },[])
   const detailsProduct = useLoaderData();
   console.log(detailsProduct);

   const handleCartPost= () =>{
       console.log(detailsProduct);
       const productExistsInCart = cart.find((item) => item._id === detailsProduct._id);
       if (productExistsInCart) {
        toast.error("This product is already in your cart");
      } else {
      
       fetch('http://localhost:5000/carts',{
        method:'POST',
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(detailsProduct)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            toast.success('Congratulation ! your cart seccessfull')
        }
       });
       }

   }

    return (
        <div>
            <h1>see here details : {detailsProduct._id}</h1>
            <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={detailsProduct.photo} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">{detailsProduct.name}</h2>
            <p>{detailsProduct.price} $</p>
            <p><button onClick={handleCartPost} className="btn">Add to cart</button></p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default SeeDetail;