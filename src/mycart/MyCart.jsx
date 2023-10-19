import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const carts = useLoaderData();
    const [deleteCart,setDeleteCart] = useState(carts);

    const handledeleteCart=(_id)=>{
        console.log(_id);
        fetch(`http://localhost:5000/carts/${_id}`,{
            method:"DELETE"
        })
         .then(res => res.json()) 
         .then(data => {
            console.log(data)
            const dataremain = deleteCart.filter((data) => data._id !== _id )
            setDeleteCart(dataremain);
        })
    }
    return (
        <div>
            <h1> here you will see your added cart : {deleteCart.length} </h1>
            <div className="grid grid-cols-2 gap-6">
                {
                    deleteCart.map(cart => (
                        <div key={cart._id}>
                             <div className="card w-96 bg-base-100 shadow-xl">
                             <figure><img src={cart.photo} alt="Shoes" /></figure>
                             <div className="card-body">
                             <h2 className="card-title">{cart.name}</h2>
                             <p>{cart.price} $</p>
                             <p><button onClick={()=>handledeleteCart(cart._id)} className="btn">Delete</button></p>
                             </div>
                             </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyCart;