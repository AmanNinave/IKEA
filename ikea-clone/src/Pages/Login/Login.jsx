import React, { useState } from "react";
import { AiOutlineArrowLeft } from "@react-icons/all-files/ai/AiOutlineArrowLeft";
import "./Login.css"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signinAction } from "../../Redux/Action/signupAction";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const data = useSelector((storedData) => {
        return storedData.signupReducer.signupUsers;
    })
    // console.log(data)
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        email: '',
        password: ''
    });

    const handle = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputData({ ...inputData, [name]: value })
    }


    const handleSignin = () => {
        let login = false 
        for (let i = 0; i < data.length; i++) {
            if (data[i].email == inputData.email && data[i].password == inputData.password) {
                localStorage.setItem("userName", JSON.stringify((data[i].firstname + " " + " " + data[i].surname)));
                // console.log(data[i].firstname)
                signinAction(true);
                login = true;

                toast.success('Login Sucessful!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });   

                navigate('/')
            }
        }
        if(!login) {
            toast.error('Login failed !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            navigate('/sign-in')
        }
        

    }
    // console.log(inputData)
    // 
    return (<div id='login_parentdiv'>

        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />

        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />


        <div className="p-5" id='login_firstchildiv'>
            <Link to='/'><AiOutlineArrowLeft style={{ color: 'white' }} /></Link>
            <img src="https://in.accounts.ikea.com/resources/static/logo.svg" alt="logo" style={{ marginLeft: '30px ' }} />

            <div className='p-4' style={{ marginTop: '100px', color: 'white' }}>

                <h1 style={{ fontSize: '32px', fontWeight: 'bold' }} > <span style={{ color: '#FBD914' }}>Login</span> to your IKEA account.</h1>

                <br /><p>Too many passwords?
                    You can now login with an OTP we will send on your email address or verified mobile number. <br />
                    <br /> Access your IKEA account using your email address to add and verify your mobile number. </p>
            </div>

        </div>

        <div id='login_secoundchildiv'>


            <form action="" className="mt-5" style={{ paddingLeft: '80px' }}>

                <div className="form-floating mb-3 col-9" >
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={handle} />
                    <label for="floatingInput">Email or Verified Mobile Number</label>
                </div>

                <div className="form-floating mt-4 mb-3 col-9">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handle} />
                    <label for="floatingPassword">Password</label>
                </div>

                <div>
                    <input type="submit" value="Continue" className="btn btn-primary mt-5 p-3 rounded-pill col-9" style={{ backgroundColor: '#0058A3' }} onClick={handleSignin} />
                </div>

            </form>


            <div style={{ padding: '58px 80px' }}>
                <p> <b>Do not have an IKEA account? Create one now:</b> </p>

                <div>
                    <button className="btn p-sm-1 mt-3 mt-md-5 p-md-3 rounded-pill col-10" style={{ border: '1px solid black' }}><b>I'm buying for my home</b></button>
                </div>

                <div>
                    <button className="btn  p-sm-1 mt-3 mt-md-5 p-md-3 rounded-pill col-10" style={{ border: '1px solid black' }}> <b>I'm buying for my company</b> </button>
                </div>

            </div>

        </div>
    </div >);
}
export default Login;