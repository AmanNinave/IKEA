import React, { useState } from 'react'
import Card from './Card';
import "./Signup.css"
import signupAction from '../../Redux/Action/signupAction';
import { useNavigate } from 'react-router-dom'
function Signup() {
    const [inputData, setInputData] = useState({
        firstname: '',
        surname: '',
        mobile: '',
        birthdata: '',
        gender: '',
        postcode: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handle = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputData({ ...inputData, [name]: value })
    }
    const handleSubmit = () => {
        signupAction(inputData)
        navigate('/sign-in')
    }

    // console.log(inputData)

    return (<div className=' d-md-flex d-sm-block'>
        <div id='banner_signup' ><img src="https://www.ikea.com/in/en/profile/6c9a5b763c764348260c1831ee856f56.jpg" alt="banner" width='100%' /></div>
        <div style={{ display: 'flex' }} className="p-5" id='card_medium'>

            <div className='first'>
                <Card url={"https://www.ikea.com/in/en/profile/da397fb7ef6e6d94257db1af77290435.jpg"} height={"30%"} />
                <Card url={"https://www.ikea.com/in/en/profile/281cff11b1bbb9d08737f5d656d7f8d6.jpg"} height={"28%"} />
                <Card url={"https://www.ikea.com/in/en/profile/a620cf6567e1d802e42dad2d419da1a1.jpg"} height={"30%"} />
                <Card url={"https://www.ikea.com/in/en/profile/558de95264a0f9501533593ab355259e.jpg"} height={"32%"} />

            </div>

            <div className='secound' style={{ marginLeft: '10px' }}>
                <Card url={"https://www.ikea.com/in/en/profile/5fdf8de127f0c602066c3aee7254c463.jpg"} height={"25%"} />
                <Card url={"https://www.ikea.com/in/en/profile/ddc28f908192eea06190ca5bf8657069.jpg"} height={"25%"} />
                <Card url={"https://www.ikea.com/in/en/profile/471c4b31a982119d5ad6018388835e64.jpg"} height={"28%"} />
                <Card url={"https://www.ikea.com/in/en/profile/3e48e8734c5c5751bd6b21045258bfac.jpg"} height={"30%"} />
                <Card url={"https://www.ikea.com/in/en/profile/6c9a5b763c764348260c1831ee856f56.jpg"} height={"25%"} />

            </div>



        </div>
        <div id='singup_form' style={{ paddingLeft: '80px' }}>

            <form action="" className="mt-5" >


                <div className="form-floating mb-3" style={{ width: '450px' }} id='signup_input'>
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" style={{ border: "none", borderBottom: '1px  solid', borderRadius: '0px', marginBottom: '30px' }} onClick={() => {
                        document.getElementById("floatingInput").preventFocus = true;
                    }} name='firstname' onChange={handle} />
                    <label for="floatingInput" >First Name</label>
                </div>


                <div className="form-floating mb-3" style={{ width: '450px' }} id='signup_input'>
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" style={{ border: "none", borderBottom: '1px  solid', borderRadius: '0px', marginBottom: '30px' }} onClick={() => {
                        document.getElementById("floatingInput").preventFocus = true;
                    }} name='surname' onChange={handle} />
                    <label for="floatingInput" >Surname</label>
                </div>


                <div className="form-floating mb-3" style={{ width: '450px' }} id='signup_input'>
                    <input type="mobile" className="form-control" id="floatingInput" placeholder="name@example.com" style={{ border: "none", borderBottom: '1px  solid', borderRadius: '0px', marginBottom: '30px' }} onClick={() => {
                        document.getElementById("floatingInput").preventFocus = true;
                    }} name='mobile' onChange={handle} />
                    <label for="floatingInput" >Mobile</label>
                </div>


                <div className="form-floating mb-3" style={{ width: '450px' }} id='signup_input'>
                    <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" style={{ border: "none", borderBottom: '1px  solid', borderRadius: '0px', marginBottom: '30px' }} onClick={() => {
                        document.getElementById("floatingInput").preventFocus = true;
                    }} name='birthdata' onChange={handle} />
                    <label for="floatingInput" >Birthdate</label>
                </div>


                <div class="col-md-6 mb-4">

                    <select class="select" style={{ width: '200px', marginTop: '20px', height: '35px' }} name='gender' onChange={handle}>
                        <option value="1" disabled>Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                    </select>

                </div>


                <div className="form-floating mb-3 mt-1" style={{ width: '450px' }} id='signup_input'>
                    <input type="mobile" className="form-control" id="floatingInput" placeholder="name@example.com" style={{ border: "none", borderBottom: '1px  solid', borderRadius: '0px', marginBottom: '30px' }}
                        name='postcode' onChange={handle} />
                    <label for="floatingInput" >Post Code</label>
                </div>


                <div className="form-floating mb-3" style={{ width: '450px' }} id='signup_input'>
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" style={{ border: "none", borderBottom: '1px  solid', borderRadius: '0px', marginBottom: '30px' }}
                        name='email' onChange={handle} />
                    <label for="floatingInput" >Email</label>
                </div>


                <div className="form-floating mt-4" style={{ width: '450px' }} id='signup_input'>
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" style={{ border: "none", borderBottom: '1px  solid', borderRadius: '0px', marginBottom: '30px' }}
                        name='password' onChange={handle} />
                    <label for="floatingPassword">Password</label>
                </div>


                <div>
                    <input type="submit" value="Create Profile" className="btn btn-dark mt-5 p-3 rounded-pill" id='signup_input' style={{ width: '450px' }} onClick={handleSubmit} />
                </div>


            </form>

        </div>
    </div >);
}

export default Signup






