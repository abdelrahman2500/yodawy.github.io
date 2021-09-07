import React, { useEffect, useState } from 'react'
import NavbarAr from '../../components/navbar/NavbarAr';
import './index.scss'
import FooterAr from '../../components/footer/FooterAr';
import { Link } from 'react-router-dom';

export default function LoginAr() {

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
                            setValidMsg("")
                            console.log(valid)
                        }
                        else{
                            valid = true
                            console.log(valid)
                        }
                    }
                }
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
        <div className="login-ar">
            {localStorage.getItem("logged") == "true" ? 
            <div>
                <NavbarAr compo={true}/>
                <div className="my-5 text-center ">
                    <h2>مرحبا {localStorage.getItem("username")}</h2>
                    <h3 className="my-5 py-5">لقد سجلت الدخول .. عُد إلى <Link to="/">الصفحة الرئيسية</Link></h3>
                    {localStorage.getItem("role") == "seller" ? <button className="btn btn-light mx-2"><Link to="/addproduct">أضف منتج</Link></button>: ""}
                    <button className="btn btn-danger" onClick={()=> logout()}>تسجيل الخروج</button>
                </div>
                <FooterAr />
            </div>:

            <div className="login-signup">
            <NavbarAr compo={true} />
                {login ? 
                <div className="l-from my-5 ">
                    <form action="" className="form">
                        <h1 className="form_title">تسجيل الدخول</h1>

                        <div className="form_div">
                            <input type="text" className="form_input" placeholder=" " value={loginUser} onChange={(e)=> setLoginUser(e.target.value)}/>
                            <label htmlFor="" className="form_label">اسم المستخدم</label>
                        </div>    
                            <p className={`${loginUserValid} text-danger`}>اسم المستخدم الذى أدخلته غير صحيح</p>

                        <div className="form_div">
                            <input type="password" className="form_input" placeholder=" " value={loginPass} onChange={(e)=> setLoginPass(e.target.value)}/>
                            <label htmlFor="" className="form_label">الرقم السرى</label>
                        </div>    
                        <p className={`${loginPassValid} text-danger`}>الرقم السرى الذى أدخلته غير صحيح</p>
                        <input type="button" className="form_button mb-3" value="Login" onClick={()=>loginValidation()} />

                        <p>لا تملك حساب <button className="btn fw-bold" onClick={()=>changeTo()}>مستخدم جديد</button></p>
                    </form>
                </div> : 
                <div className="l-from my-5">
                    <form action="" className="form">
                        <h1 className="form_title">تسجيل</h1>

                        <div className="form_div">
                            <input type="text" className="form_input" placeholder=" " required value={signupUser} onChange={(e)=> setSignupUser(e.target.value)}/>
                            <label htmlFor="" className="form_label">اسم المستخدم</label>
                        </div>    
                        <p className={`${signupUserValid} text-danger`}>اسم المستخدم يجب أن يكون أكثر من 3 حروف</p>
                        <p className={`${validMsg} text-danger`}>اسم المستخدم الذى أدخلته موجود بالفعل</p>
                        <div className="form_div">
                            <input type="password" className="form_input" placeholder=" " required value={signupPass} onChange={(e)=> setSignupPass(e.target.value)}/>
                            <label htmlFor="" className="form_label">الرقم السرى</label>
                        </div>   
                        <p className={`${signupPassValid} text-danger`}>الرقم السرى يجب أن يكون أكثر من 3 حروف</p>
                        <div className="form_div">
                            <input type="password" className="form_input" placeholder=" " required value={signupPassRe} onChange={(e)=> setSignupPassRe(e.target.value)}/>
                            <label htmlFor="" className="form_label">أعد الرقم السرى</label>
                        </div>  
                        <p className={`${signupPassReValid} text-danger`}>الرقم السرى الذى ادخلته لا يطابق الرقم الذى أدخلته</p>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" required   onChange={(e)=> e.target.value == "on" ? setRadio("seller"):""}/>
                            <label className="form-check-label" htmlFor="validationFormCheck2">بائع و مشترى</label>
                        </div>
                        <div className="form-check mb-3">
                            <input type="radio" className="form-check-input" id="validationFormCheck3" name="radio-stacked" required  onChange={(e)=> e.target.value == "on" ? setRadio("buyer"):""}/>
                            <label className="form-check-label" htmlFor="validationFormCheck3">مشترى فقط</label>
                        </div>
                        <p className={`${radioValid} text-danger`}>يجب ان تختار واحدا منهم</p>

                        <input type="button" className="form_button mb-3" value="Sign Up" onClick={()=> signUpValidation()}/>

                        <p>أنت تملك حساب <button className="btn fw-bold" onClick={()=>changeTo()}>تسجيل الدخول</button></p>
                    </form>
                </div>
                }
                <FooterAr />
            </div>
            }
        </div>
    )
}
