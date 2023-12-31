import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../authentication/AuthProvider";
// import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    // const carts = useLoaderData();

    const {user} = useContext(AuthContext);
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/cart/${user.email}`)
        .then(res => res.json())
        .then(data => setCarts(data))
    },[user.email])
 console.log(carts)
    const handledeleteCart=(_id)=>{
        console.log(_id);
        fetch(`http://localhost:5000/carts/${_id}`,{
            method:"DELETE"
        })
         .then(res => res.json()) 
         .then(data => {
            console.log(data)
            const dataremain = carts.filter((data) => data._id !== _id )
            setCarts(dataremain);
        })
    }
    return (
        <div>
            <h1 className="text-center py-6"> Here you will see your added cart : {carts.length} </h1>
            <div className="grid lg:grid-cols-2 gap-6 lg:w-[80%] mx-auto bg-rose-100">
                {
                carts.length > 0 ?  ( carts.map(cart => (
                        <div className="py-10" key={cart._id}>
                             <div className="card w-96 bg-base-100 shadow-xl">
                             <figure><img className="h-72" src={cart.photo} alt="Shoes" /></figure>
                             <div className="card-body">
                             <h2 className="card-title">{cart.name}</h2>
                             <p>{cart.price} $</p>
                             <p>{cart.user}</p>
                             <p><button onClick={()=>handledeleteCart(cart._id)} className="btn">Delete</button></p>
                             </div>
                             </div>
                        </div>
                    ))
                   ):(
                    <div>
                        <p className="text-4xl font-serif text-center">you have no cart yet</p>
                    </div>
                   )
                }
            </div>
        </div>
    );
};

export default MyCart;