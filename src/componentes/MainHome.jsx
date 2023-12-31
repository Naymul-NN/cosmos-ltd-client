import { Link, useLoaderData } from "react-router-dom";
import Footer from "../footer/Footer";
import Banner from "../bannder/Banner";
import BestProduct from "../bestProduct/BestProduct";

const MainHome = () => {
    const brands = useLoaderData();

    const handleproduct = (brand) =>{
        console.log(brand);
       fetch(`http://localhost:5000/products/${brand}`)
    }
    return (
        <div>
            <div className="pb-[230px]">
                <Banner></Banner>
            </div>
            <h1 className="text-center text-3xl font-bold pb-5">These are yor famous brand:{brands.length}</h1>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 bg-blue-100">
           {
                brands.map(brand => (
                    <div  key={brand._id} className="card w-96  shadow-xl bg-pink-100 mt-5 lg:ml-7">
                   <figure><img className="h-72" src={brand.photo} alt="Shoes" /></figure>
                   <div className="card-body">
                    <h2 className="card-title"> Name of brand : {brand.brand}</h2>
                  <Link to={`/products/${brand.brand}`}><button className="btn" onClick={()=>handleproduct(brand.brand)}>see more</button></Link>
                   </div>
                     </div>
                ))
            }
           </div>
           <BestProduct></BestProduct>
          <div className="w-full py-4">
          <Footer></Footer>
          </div>
        </div>
    );
};

export default MainHome;