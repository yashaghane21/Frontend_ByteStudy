import { useNavigate } from "react-router-dom"
import img1 from '../Images/Login.png'
import { useState } from "react"
import axios from "axios"
import {toast} from "react-toastify"
export default function ForgotPassword() {
    const navigate = useNavigate()
    const [email, setemail] = useState("")
    const [newpassword, setnewpassword] = useState("")

    const handlesubmit = async (e) => {
        e.preventDefault();
        const { data } = await axios.put("http://localhost:5000/api/v3/fpass", {

            email: email,

            newpassword: newpassword,

        });
        if (data.success) {
            toast.success(" password reset succesfully ")
            navigate("/login")
           
        }
        else {
            toast.error("seomething went wronf")
        }
    }
    return (
        <>
            <div className="w-100 mt-16 justify-center px-5 lg:px-72 md:pb-52 max-md:pb-16" >
                <div className="w-[100%] flex md:flex-row max-md:flex-col-reverse p-3 bg-slate-300 rounded-md" >
                    <div className="w-[60%] max-md:w-[100%] max-md:pb-8 h-auto text-center text-2xl font-semibold p-2 bg-slate-200" >
                        <h1 className='font underline underline-offset-2 max-md:mt-5' >Forgot Password</h1>
                        <div className='mt-7 ' >
                            <form  onSubmit={handlesubmit}>

                                <input
                                    type="email"
                                    className="w-[80%] border-b-2 border-blue-300  text-black focus:outline-none focus:border-yellow-400 w-100 bg-slate-200 focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3 md:mt-4"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    placeholder="Email" />

                                <input
                                    type="password"
                                    className="w-[80%] border-b-2 border-blue-300  text-black focus:outline-none focus:border-yellow-400 w-100 bg-slate-200 focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3 md:mt-5"
                                    name="fullname"
                                    value={newpassword}
                                    onChange={(e) => setnewpassword(e.target.value)}
                                    placeholder="New Password" />
                                <button className='w-[80%] mt-12 p-2 text-lg bg-yellow-400 hover:bg-yellow-300 rounded-lg'  >Reset</button>

                            </form>

                        </div>

                    </div>
                    <div className="w-[40%] max-md:w-[100%] h-auto bg-slate-200 "><img src={img1} className='h-72 w-[100%] max-md:w-[100%] max-md:h-52 rounded-md' /></div>
                </div>
            </div>
        </>
    )
}