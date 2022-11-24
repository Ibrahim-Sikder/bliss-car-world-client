import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link} from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';


const SignUp = () => {
  
  const {createUser} = useContext(AuthContext)
  const [signUpError, setSignUpError] = useState();
  const [createUserEmail, setCreateUserEmail] = useState('');
    const { register,formState: { errors }, handleSubmit } = useForm();
   


    const handleSignUp = (data) =>{
      setSignUpError('')
      createUser(data.email, data.password)
      .then(result =>{
        const user = result.user;
        toast("User created successfully")
        console.log(user);
      })
      .catch(err=>{
        console.log('err', err)
        setSignUpError(err.message)
      });
      
    }




    return (
        <div>
             
           <div className='h-[500px] flex items-center justify-center'>           
               <div className='w-96 p-6'>
               <h2 className='text-3xl text-center'>Sign Up</h2>
               <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-full">
                <label className="label"><span className="label-text">Name</span></label>
                <input type="text" className="input input-bordered w-full"
                 {...register("name", { required: "Name  is required" })} 
                 placeholder="Name" />
                   {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                 </div>
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
                 minLength: { value: 6, message: "Password must be six character ",
                //   pattern:{ value: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/} 
                  
                }})} 
                placeholder="Password" />
                 {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                <label className="label"><span className="label-text">Forgot password</span></label>
                 </div>
              <input className='btn btn-accent w-full' type="submit" value="Sign Up" />
              <p className='mt-3'>Allready have an account <Link to="/login" className='text-secondary'>Please login </Link> </p>
              <div className="divider">OR</div>
              
             {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
               </div>
           </div>
        </div>
    );
};

export default SignUp;