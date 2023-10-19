import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authentication/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogout = () => {
    logOut()
   .then(() => {
     toast.success('sign out successful');
    })
   .catch((error) => {
     console.error(error);
   });
   };

const link = <>
               <ul>
                <Link to ='/'>Home</Link>
                {/* <Link to='/from'>From</Link> */}
                <Link className="px-7" to ='/login'>Login</Link>
                <Link to ='/addProduct'>AddProduct</Link>
                <Link  className='pl-7' to ='/mycart'>My cart</Link>
                
               </ul>

</>
    

   

    return (
        <div className="py-7">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {link}
      </ul>
    </div>
    <a className=" normal-case text-xl"><img className=" w-20" src="https://i.ibb.co/NmsjKGc/785.png" alt="" height="70px" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {link}
    </ul>
  </div>
  <div className="navbar-end flex lg:flex-row flex-col ">
  {
    user && <h1 className="pr-2"><span className="font-bold">user:</span>{user.email}</h1>
  }
   {
      user ?
      <button onClick={handleLogout} className="btn btn-sm btn-primary">log out</button>
      :
      
      <Link to ="/login"><button className="btn  btn-sm btn-primary">log in</button></Link>
    
   }  
  </div>
</div>
        </div>
    );
};

export default Navbar;