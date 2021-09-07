import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './index.scss'
import Footer from './../../components/footer/Footer';
import { Link } from 'react-router-dom';

export default function Login() {

    const[users, setUsers] = useState()
    const [login, setLogin] = useState(true)
    const [loginUser, setLoginUser] = useState("")
    const [loginUserValid, setLoginUserValid] = useState("d-none")
    const [loginPass, setLoginPass] = useState("")
    const [loginPassValid, setLoginPassValid] = useState("d-none")
    const [signupUser, setSignupUser] = useState("")
    const [signupUserValid, setSignupUserValid] = useState("d-none")
    const [signupPass, setSignupPass] = useState("")
    const [signupPassValid, setSignupPassValid] = useState("d-none")
    const [signupPassRe, setSignupPassRe] = useState("")
    const [signupPassReValid, setSignupPassReValid] = useState("d-none")
    const [radio, setRadio] = useState("")
    const [radioValid, setRadioValid] = useState("d-none")
    const[status, setStatus] = useState(false)
    const[validMsg, setValidMsg] = useState("d-none")

    function reset(){
        setLoginUser("")
        setLoginPass("")
        setSignupUser("")
        setSignupPass("")
        setSignupPassRe("")
        setRadio("")
    }
    useEffect(()=>{
        fetch('http://localhost:3001/users')
            .then((response) => response.json())
            .then((usersData) => setUsers(usersData));
    },[radio])

    useEffect(()=>{
        setValidMsg(validMsg)
    },[signUpValidation])

    useEffect(()=>{
        setStatus(status)
    },[status])

    function signUpValidation(){
        // console.log(signupUser.length)
        signupUser.length <=3 ? setSignupUserValid("") : setSignupUserValid("d-none") 
        signupPass.length <=3 ? setSignupPassValid("") : setSignupPassValid("d-none") 
        signupPassRe != signupPass ? setSignupPassReValid("") : setSignupPassReValid("d-none") 
        radio == "seller" || radio == "buyer" ? setRadioValid("d-none") : setRadioValid("")
        if(signupUser.length >=3 && signupPass.length >=3 && signupPassRe == signupPass && (radio == "seller" || radio == "buyer")){
            let valid = true
            users.map(user => {
                for(let i =0; i< users.length; i++){
                    if(valid == true){
                        if(user.username == signupUser){
                            valid = false;
                            console.log(valid)
                            // break;
                        }
                        else{
                            valid = true
                            console.log(valid)
                        }
                    }
                }
                // console.log(valid)
            })
            if(valid == true){
                fetch('http://localhost:3001/users', {
                    method: 'POST',
                        body: JSON.stringify({
                            username: signupUser,
                            password: signupPass,
                            role: radio,
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
                    .then((response) => response.json())
                    reset()
                setLogin(true)
            }else{
                setValidMsg("")
            }
            
            
        }
    }

    const[logged, setLogged] = useState(localStorage.getItem("logged") ? localStorage.getItem("logged") : localStorage.setItem("logged", "false"))

    useEffect(()=>{
        setLogged(localStorage.getItem("logged"))
    },[logged])

    function loginValidation(){
        fetch('http://localhost:3001/users')
            .then((response) => response.json())
            .then((usersData) => {
                for(let i = 0; i<usersData.length; i++){
                    if(usersData[i].username == loginUser && usersData[i].password == loginPass){
                        localStorage.setItem("logged", "true")
                        localStorage.setItem("username", usersData[i].username)
                        localStorage.setItem("role", usersData[i].role)
                        setLogged(localStorage.setItem("logged", "true"))
                        setLoginPassValid("d-none")   
                        setLoginUserValid("d-none")
                        break;
                    }else{
                        setLoginPassValid("")   
                        setLoginUserValid("")
                    }
                }
            })
    }
    function logout(){
        localStorage.setItem("logged", "false")
        setLogged(localStorage.setItem("logged", "false"))
        localStorage.removeItem("username")
        localStorage.removeItem("role")
    }

    function changeTo(){
        setLogin(!login)
        reset()
    }

    return (
        <div>
        {localStorage.getItem("logged") == "true" ? 
        <div>
            <Navbar compo={true}/>
            <div className="my-5 text-center ">
                <h2>hello {localStorage.getItem("username")}</h2>
                <h3 className="my-5 py-5">You are logged in .. go to <Link to="/">home</Link></h3>
                {localStorage.getItem("role") == "seller" ? <button className="btn btn-light mx-2"><Link to="/addproduct">Add Product</Link></button>: ""}
                <button className="btn btn-danger" onClick={()=> logout()}>Sign Out</button>
            </div>
            <Footer />
        </div>:

        <div className="login-signup">
        <Navbar compo={true} />
            {login ? 
            <div className="l-from my-5 ">
                <form action="" className="form">
                    <h1 className="form_title">Login</h1>

                    <div className="form_div">
                        <input type="text" className="form_input" placeholder=" " value={loginUser} onChange={(e)=> setLoginUser(e.target.value)}/>
                        <label htmlFor="" className="form_label">Username</label>
                    </div>    
                        <p className={`${loginUserValid} text-danger`}>Username u enterd isn't valid</p>

                    <div className="form_div">
                        <input type="password" className="form_input" placeholder=" " value={loginPass} onChange={(e)=> setLoginPass(e.target.value)}/>
                        <label htmlFor="" className="form_label">Password</label>
                    </div>    
                    <p className={`${loginPassValid} text-danger`}>Password u enterd isn't valid</p>
                    <input type="button" className="form_button mb-3" value="Login" onClick={()=>loginValidation()} />

                    <p>dont't have account <button className="btn fw-bold" onClick={()=>changeTo()}>Sign Up</button></p>
                </form>
            </div> : 
            <div className="l-from my-5">
                <form action="" className="form">
                    <h1 className="form_title">Sign up</h1>

                    <div className="form_div">
                        <input type="text" className="form_input" placeholder=" " required value={signupUser} onChange={(e)=> setSignupUser(e.target.value)}/>
                        <label htmlFor="" className="form_label">Username</label>
                    </div>    
                    <p className={`${signupUserValid} text-danger`}>Username u enterd should be more than 3</p>
                        <p className={`${validMsg} text-danger`}>Username u enterd is already exists</p>
                    <div className="form_div">
                        <input type="password" className="form_input" placeholder=" " required value={signupPass} onChange={(e)=> setSignupPass(e.target.value)}/>
                        <label htmlFor="" className="form_label">Password</label>
                    </div>   
                    <p className={`${signupPassValid} text-danger`}>Password u enterd should be more than 3</p>
                    <div className="form_div">
                        <input type="password" className="form_input" placeholder=" " required value={signupPassRe} onChange={(e)=> setSignupPassRe(e.target.value)}/>
                        <label htmlFor="" className="form_label">repeat Password</label>
                    </div>  
                    <p className={`${signupPassReValid} text-danger`}>Password u enterd isn't match with password</p>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" required   onChange={(e)=> e.target.value == "on" ? setRadio("seller"):""}/>
                        <label className="form-check-label" htmlFor="validationFormCheck2">Seller & Buyer</label>
                    </div>
                    <div className="form-check mb-3">
                        <input type="radio" className="form-check-input" id="validationFormCheck3" name="radio-stacked" required  onChange={(e)=> e.target.value == "on" ? setRadio("buyer"):""}/>
                        <label className="form-check-label" htmlFor="validationFormCheck3">Buyer Only</label>
                    </div>
                    <p className={`${radioValid} text-danger`}>You should choose what do you want to be</p>

                    <input type="button" className="form_button mb-3" value="Sign Up" onClick={()=> signUpValidation()}/>

                    <p>you have an account <button className="btn fw-bold" onClick={()=>changeTo()}>Login</button></p>
                </form>
            </div>
            }
            <Footer />
        </div>
        }
        </div>
    )
}
