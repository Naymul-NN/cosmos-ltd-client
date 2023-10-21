import { useContext } from "react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../authentication/AuthProvider";

const SeeDetail = () => {
    const {user} = useContext(AuthContext)
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/cart/${user.email}`)
        .then(res=>res.json())
        .then(data=> setCart(data))
    },[user.email])

    console.log(cart);

   const detailsProduct = useLoaderData();

   const usercart = {...detailsProduct, 
                  user: user.email}
   console.log(usercart);

   const handleCartPost= () =>{
       console.log(detailsProduct);
       const productExistsInCart = cart.find((item) => item._id === detailsProduct._id);
       console.log(productExistsInCart);
       if (productExistsInCart) {
        toast.error("This product is already in your cart");
      } else {
      
       fetch('http://localhost:5000/carts',{
        method:'POST',
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(usercart)
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
            <h1 className="text-center text-2xl pb-6">See here details </h1>
            <div className="flex justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={usercart.photo} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">Name: {usercart.name}</h2>
            <p>price: {usercart.price} $</p>
            <p>{usercart.details} </p>
            <p><button onClick={handleCartPost} className="btn">Add to cart</button></p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default SeeDetail;