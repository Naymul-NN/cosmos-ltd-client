import { useLoaderData } from "react-router-dom";

const Update = () => {
    const updateData = useLoaderData();
    console.log(updateData);

    const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name =form.name.value;
        const brand =form.brand.value;
        const type =form.type.value;
        const price =form.price.value;
        const rating =form.rating.value;
        const details =form.details.value;
        const photo =form.photo.value;

        const updateProduct = {name, brand,type,price,rating,details,photo}
        console.log(updateProduct);

        // send data to server then database

        fetch(`https://mongodb-express-83yh9mh1e-naymul-islams-projects.vercel.app/product/${updateData._id}`,{
            method:'PUT',
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(updateProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    return (
        <div>
            <h1> here you can update your product :{updateData._id} </h1>
            <div className="bg-red-100">
                <form onSubmit={handleUpdate}>
                    {/* row of input */}
                    <div className="grid lg:flex lg:gap-6">
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Product name</span>
                   </label>
                     <label className="input-group">
                 <span>name</span>
                 <input type="text" placeholder="name" name="name" defaultValue={updateData.name} className="input input-bordered w-full" />
                 </label>
                 </div>
                   
                    
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Brand name</span>
                   </label>
                     <label className="input-group">
                 <span>brand</span>
                 <input type="text" placeholder="give the brand name" name="brand" defaultValue={updateData.brand} className="input input-bordered w-full" />
                 </label>
                 </div>
                    </div>
                    <div className="lg:flex lg:gap-6">
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Type</span>
                   </label>
                     <label className="input-group">
                 <span>type</span>
                 <input type="text" placeholder="type of your product" name="type" defaultValue={updateData.type} className="input input-bordered w-full" />
                 </label>
                 </div>
                   
                    
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Price</span>
                   </label>
                     <label className="input-group">
                 <span>$USD</span>
                 <input type="text" placeholder="test" name="price" defaultValue={updateData.price} className="input input-bordered w-full" />
                 </label>
                 </div>
                    </div>
                    <div className="lg:flex lg:gap-6">
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Rating</span>
                   </label>
                     <label className="input-group">
                 <span>rating</span>
                 <input type="text" placeholder="give rating" name="rating" defaultValue={updateData.rating} className="input input-bordered w-full" />
                 </label>
                 </div>
                   
                    
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Details</span>
                   </label>
                     <label className="input-group">
                 <span>details</span>
                 <input type="text" placeholder="details" name="details" defaultValue={updateData.details} className="input input-bordered w-full" />
                 </label>
                 </div>
                    </div>
                   
                    <div className="form-control w-full">
                   <label className="label">
                   <span className="label-text">Photo url</span>
                   </label>
                     <label className="input-group">
                 <span>photo</span>
                 <input type="text" placeholder="photo url" name="photo" defaultValue={updateData.photo} className="input input-bordered w-full" />
                 </label>
                 </div>

                <input type="submit" value="Add Product" className="btn btn-block mt-6" id="" />
                </form>
            </div>
        </div>
    );
};

export default Update;