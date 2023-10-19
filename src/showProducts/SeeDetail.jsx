import { useLoaderData } from "react-router-dom";

const SeeDetail = () => {
   const detailsProduct = useLoaderData();
   console.log(detailsProduct);
   const handleCartPost= () =>{
       console.log(detailsProduct);
      
       fetch('http://localhost:5000/carts',{
        method:'POST',
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(detailsProduct)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })

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