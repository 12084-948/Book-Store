import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        await axios
            .post("http://localhost:3000/user/login", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success("Login Successfully")
                    document.getElementById('my_modal_1').close()
                    setTimeout(() => {
                        window.location.reload()
                        localStorage.setItem("Users", JSON.stringify(res.data.user))
                    }, 2000)
                }
            }).catch((err) => {
                if (err.response) {
                    console.log(err)
                    toast.error("Error: " + err.response.data.message)
                    setTimeout(() => { }, 2000);
                }
            })
    }
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className='helButton'>
                        <h3 className="helloText">Hello!</h3>
                        <div className="modal-action">
                            <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
                                <div className="hell">
                                    <Link to='/' className="btnn"
                                        onClick={() => document.getElementById('my_modal_1').close()}
                                    >X</Link>
                                </div>

                                <span className='first'>Email</span>
                                <br />
                                <input type="email" className='firstInput' placeholder='Enter Your Email...'
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className="brs">This field is required</span>}
                                <br />

                                <span className='second'>Password</span>
                                <br />
                                <input type="password" className='secondInput' placeholder='Enter Your Password...'
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className="brs">This field is required</span>}


                                <div className='loginBottom'>
                                    <button  >Login</button>
                                    <p>Not registered? <Link to='/signup'> Signup</Link>{" "}</p>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog >
        </div >

    )
}

export default Login