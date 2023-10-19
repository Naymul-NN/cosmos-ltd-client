
const Home = () => {
    const handlePost = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password= form.password.value;
        const user={email,password}
        console.log(user);
        fetch('http://localhost:5000/users',{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
        })

    }
    return (
        <div>
            <h1>this is home page</h1>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handlePost} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;