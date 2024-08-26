import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col  w-[550px]">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-10">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
        <div className="">
          <p className="">
            If you have already account?{" "}
            <Link className="font-bold text-primary underline" to={"/login"}>
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
