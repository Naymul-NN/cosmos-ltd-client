import { Link, useLoaderData } from "react-router-dom";

const MainHome = () => {
    const brands = useLoaderData();

    const handleproduct = (brand) =>{
        console.log(brand);
       fetch(`http://localhost:5000/products/${brand}`)
    }
    return (
        <div>
            <h1>this is homepage:{brands.length}</h1>
           <div className="grid grid-cols-3 gap-5">
           {
                brands.map(brand => (
                    <div  key={brand._id} className="card w-96 bg-base-100 shadow-xl">
                   <figure><img src={brand.photo} alt="Shoes" /></figure>
                   <div className="card-body">
                    <h2 className="card-title"> Name of brand : {brand.brand}</h2>
                  <Link to={`/products/${brand.brand}`}><button className="btn" onClick={()=>handleproduct(brand.brand)}>see more</button></Link>
                   </div>
                     </div>
                ))
            }
           </div>
        </div>
    );
};

export default MainHome;