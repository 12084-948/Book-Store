import React from 'react'
import './login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from "axios"
import toast from 'react-hot-toast'
const Signup = () => {
    // redirecting to home page after signup
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }
        await axios
            .post("http://localhost:3000/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success("Signup Successfully")
                    navigate(from, {replace: true})
                }
            localStorage.setItem("Users",JSON.stringify(res.data.user))
            }).catch((err) => {
                if(err.response){
                    console.log(err)
                    toast.error("Error: "+ err.response.data.message)
                }
            })
    }
    return (
        <>
            <div id="my_modal_1" className="modal">
                <div className="modall-box">
                    <div className='helButton'>
                        <h3 className="helloText">Hello!</h3>
                        <div className="modal-action">
                            <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
                                <div className="hell">
                                    <Link to='/' className="btnn" >X</Link>
                                </div>
                                <span className='firstt'>Name</span>
                                <br />
                                <input className='firsttInput' type="text" {...register("fullname", { required: true })} placeholder='Enter Your Fullname...' />
                                <br />
                                {errors.fullname && <span className='brs'>This field is required</span>}
                                <br />

                                <span className='firstt'>Email</span>
                                <br />
                                <input className='firsttInput' {...register("email", { required: true })} type="text" placeholder='Enter Your Email...' />
                                <br />
                                {errors.email && <span className='brs'>This field is required</span>}
                                <br />

                                <span className='firstt'>Password</span>
                                <br />

                                <input className='firsttInput' {...register("password", { required: true })} type="text" placeholder='Enter Your Password...' />
                                <br />
                                {errors.password && <span className='brs'>This field is required</span>}
                                <div className='loginBottom'>
                                    <button>Signup</button>
                                    <div className="btnDivv">
                                        <p>Have Account?</p>
                                        <Link to='/' >Login</Link>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div >

        </>
    )
}

export default Signup