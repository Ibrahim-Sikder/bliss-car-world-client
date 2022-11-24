
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthProvider";


const Login = () => {
  const { register,formState: { errors },  handleSubmit } = useForm();
  const {signIn} = useContext(AuthContext)
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');


  const handleLogin = data =>{
    signIn(data.email, data.password)
    .then(result=>{
      const user = result.user ;
      console.log(user);
      
    })
    .catch(error=>{
      console.error(error.message)
    })
  }
  
    return (
        <div>
             
           <div className='h-[500px] flex items-center justify-center'>           
               <div className='w-96 p-6'>
               <h2 className='text-3xl text-center'>Login</h2>
               <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full">
                <label className="label"><span className="label-text">Email</span></label>
                <input type="email" className="input input-bordered w-full"
                 {...register("email", { required: "Email Address is required" })} 
                 placeholder="Email" />
                   {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                 </div>
                 <div className="form-control w-full">
                <label className="label"><span className="label-text">Password</span></label>
                <input type="password" className="input input-bordered w-full" 
                {...register("password", 
                { required: "Password is required",
                 minLength: { value: 6, message: "Password must be six character "
                  
                }})} 
                placeholder="Password" />
                 {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                <label className="label"><span className="label-text">Forgot password</span></label>
                 </div>
              <input className='btn btn-accent w-full' type="submit" value="Login" />
              <p className='mt-3'>If you are a new seller & byer then, <Link to="/signup" className='text-secondary'>Create an account </Link> </p>
              <div className="divider">OR</div>
              <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE </button>
              <div>
                {
                  loginError && 
                  <p className='text-red-600 mt-5'>{loginError}</p>
                }
              </div>
            </form>
               </div>
           </div>
        </div>
    );
};

export default Login;