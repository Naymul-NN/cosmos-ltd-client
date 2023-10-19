import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Form = () => {
    const dataload = useLoaderData();
    const [user,setuser] = useState(dataload);

    const handledelete=(_id)=>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:"DELETE"
        })
         .then(res => res.json()) 
         .then(data => {
            console.log(data)
            const dataremain = user.filter((data) => data._id !== _id )
            setuser(dataremain);
        })
    }
    return (
        <div className="text-center">
            <h1 className="text-4xl text-center py-7">see the form : {user.length}</h1>
            {
              user.map(item=>(
                <p key={item._id}>email: {item.email}, password:{item.password} <button className="pl-7 " onClick={()=>handledelete(item._id)}> x</button></p>
              ))
            }
            
        </div>
    );
};

export default Form;