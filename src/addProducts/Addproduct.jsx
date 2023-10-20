import toast from "react-hot-toast";

const Addproduct = () => {
    const handleAddProduct = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name =form.name.value;
        const brand =form.brand.value;
        const type =form.type.value;
        const price =form.price.value;
        const rating =form.rating.value;
        const details =form.details.value;
        const photo =form.photo.value;

        const newProduct = {name, brand,type,price,rating,details,photo}
        console.log(newProduct);

        // send data to server then database

        fetch('https://mongodb-express-83yh9mh1e-naymul-islams-projects.vercel.app/products',{
            method:'POST',
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                toast.success("congraculation ! your product add successfully")
            }
        })
    }

    
    return (
        <div className="bg-pink-100 p-10">
            <h1 className="text-center py-6">This form for add product</h1>
            <div>
                <form onSubmit={handleAddProduct}>
                    {/* row of input */}
                    <div className="grid lg:flex lg:gap-6">
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Product name</span>
                   </label>
                     <label className="input-group">
                 <span>name</span>
                 <input type="text" placeholder="name" name="name" className="input input-bordered w-full" />
                 </label>
                 </div>
                   
                    
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Brand name</span>
                   </label>
                     <label className="input-group">
                 <span>brand</span>
                 <input type="text" placeholder="give the brand name" name="brand" className="input input-bordered w-full" />
                 </label>
                 </div>
                    </div>
                    <div className="grid lg:flex lg:gap-6">
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Type</span>
                   </label>
                     <label className="input-group">
                 <span>type</span>
                 <input type="text" placeholder="type of your product" name="type" className="input input-bordered w-full" />
                 </label>
                 </div>
                   
                    
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Price</span>
                   </label>
                     <label className="input-group">
                 <span>$USD</span>
                 <input type="text" placeholder="price" name="price" className="input input-bordered w-full" />
                 </label>
                 </div>
                    </div>
                    <div className="grid lg:flex lg:gap-6">
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Rating</span>
                   </label>
                     <label className="input-group">
                 <span>rating</span>
                 <input type="text" placeholder="give rating" name="rating" className="input input-bordered w-full" />
                 </label>
                 </div>
                   
                    
                    <div className="form-control md:w-1/2">
                   <label className="label">
                   <span className="label-text">Details</span>
                   </label>
                     <label className="input-group">
                 <span>details</span>
                 <input type="text" placeholder="details" name="details" className="input input-bordered w-full" />
                 </label>
                 </div>
                    </div>
                   
                    <div className="form-control w-full">
                   <label className="label">
                   <span className="label-text">Photo url</span>
                   </label>
                     <label className="input-group">
                 <span>photo</span>
                 <input type="text" placeholder="photo url" name="photo" className="input input-bordered w-full" />
                 </label>
                 </div>

                <input type="submit" value="Add Product" className="btn btn-block mt-6" id="" />
                </form>
            </div>
        </div>
    );
};

export default Addproduct;