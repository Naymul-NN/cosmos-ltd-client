import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const carts = useLoaderData();
    const [deleteCart,setDeleteCart] = useState(carts);

    const handledeleteCart=(_id)=>{
        console.log(_id);
        fetch(`https://mongodb-express-83yh9mh1e-naymul-islams-projects.vercel.app/carts/${_id}`,{
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
            <h1 className="text-center py-6"> Here you will see your added cart : {deleteCart.length} </h1>
            <div className="grid lg:grid-cols-2 gap-6 lg:w-[80%] mx-auto bg-rose-100">
                {
                deleteCart.length > 0 ?  ( deleteCart.map(cart => (
                        <div className="py-10" key={cart._id}>
                             <div className="card w-96 bg-base-100 shadow-xl">
                             <figure><img className="h-72" src={cart.photo} alt="Shoes" /></figure>
                             <div className="card-body">
                             <h2 className="card-title">{cart.name}</h2>
                             <p>{cart.price} $</p>
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