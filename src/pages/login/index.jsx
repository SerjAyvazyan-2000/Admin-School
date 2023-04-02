import React, {useState} from "react";
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import authorizationType from "../../store/combineRedusers/reducers/type";


const Login = () => {
    const registerList = useSelector(state => state.Register.registerList)
    const loginKey = useSelector(state => state.Register.loginKey)
    const dispatch = useDispatch()
    const [userLogin , setUserLogin] = useState({
        email:'',
        password:''
    })
    const [errorText , setErrorText] = useState({
        email:'',
        password:''
    })

    const handleChange = (e) => {
         setUserLogin({...userLogin,[e.target.name]:e.target.value})
    }

    const handleClick = () => {
        // ======================EROR==============

        // const users = JSON.parse(localStorage.getItem('login-key'))
        // if (users.some(x => x.email === userLogin.email && x.password === userLogin.password)) {
        //     console.log("ha")
        // }
        // ======================EROR==============
        if(validation()){
            const localUser = JSON.parse(localStorage.getItem("login-key"))
            localUser.forEach((item,index)=>{
                if(item.email  === userLogin.email && item.password === userLogin.password){
                    dispatch({type:authorizationType.CHECK_LOGIN_KEY,payload:userLogin})

                }

            })
        }

    }

    const validation = () => {
        let validate = true
        let errorString = {
            email:'',
            password:''
        }
        const validateMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(!userLogin.email.trim().length){
            errorString.email = "Fill in The Required Email"
            validate = false
        }else if(!validateMail.test(userLogin.email)){
             errorString.email = 'Fill In The Email'
             validate = false
        }
        if(!userLogin.password.trim().length){
            validate = false
             errorString.password = "Fill in The Required Password"
        }
     setErrorText(errorString)
        return validate

    }

    return  <div className="login-section">
        <div className="p-login-block">
            <div className="block-name">
                <h1>SIGN IN</h1>
            </div>

            <div className="login-block-tools">
                <label>
                    <span>Email</span>
                    <input value={userLogin.email} onChange={handleChange} name="email" type="text" placeholder="Email"/>
                    <p>{errorText.email}</p>
                </label>
            </div>

            <div className="login-block-tools">
                <label>
                    <span>Password</span>
                    <input value={userLogin.password} onChange={handleChange}  name="password" type="text" placeholder="Password"/>
                    <p>{errorText.password}</p>
                </label>
            </div>
            <button onClick={handleClick}>SIGN IN</button>

        </div>

    </div>
}
export default Login