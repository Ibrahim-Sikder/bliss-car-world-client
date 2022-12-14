import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const {signInWithGoogle} = useContext(AuthContext);

    const handleSignUp = data => {
        
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully')
                
                navigate(from, {replace: true});
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch(err => console.error(err))
                    navigate(true);
            })
            .catch(err => {
                console.error(err)
                setSignUpError(err.message)
            })
    }

    const handleGoogleSign = () =>{
        signInWithGoogle()
        .then(result=>{
            const user = result.user ;
            console.log(user)
        })
        .catch( err => {
            console.error( err )
           
        })

    }


    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        console.log(user)
        fetch(`https://bliss-car-world-server-ibrahim-sikder.vercel.app/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                getUserToken(email);

            })
    };


    const getUserToken = email => {
        fetch(`https://bliss-car-world-server-ibrahim-sikder.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    navigate('/');
                }
            })
    }

    return (
        <div className='flex justify-center items-center w-96 mx-auto'>
            <div className='w-96 p-5'>
                <h2 className='text-3xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>



                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Your Name</span>
                        </label>
                        <input type="text" {...register("name")} className="input input-bordered w-full " placeholder="Enter Name" />
                        

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Your Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full " placeholder="Enter Email" />
                        {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Your Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password Address is required" })} className="input input-bordered w-full " placeholder="Enter Password" />
                        {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text font-semibold">Forget Password?</span>
                        </label>
                    </div>
                    <div className="form-control w-full border border-gray-400 rounded-md px-3 pb-1">
                        {/* <label className="label">
                            <span className="label-text font-semibold">Select Buyer Or Saller</span>
                        </label> */}
                        <select {...register("role", { required: true })}>
                            {/* <option value="">Select...</option> */}
                            <option value="buyer" selected>Buyer</option>
                            <option value="saller">Saller</option>
                        </select>
                    </div>



                    {/* <p>{data}</p> */}
                    <input className='btn btn-outline w-full mt-5' value="Sign Up" type="submit" />

                    { signUpError && <p className='text-red-500'>{signUpError}</p>}
                </form>
                <p className='text-center mt-2'>Already Have an Account, Please <Link className='text-primary' to="/login">Login</Link></p>

                <div className="divider">OR</div>

                <button className='btn btn-outline w-full' onClick={handleGoogleSign}>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;