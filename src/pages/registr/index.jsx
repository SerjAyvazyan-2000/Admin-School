import React, {useEffect, useState} from "react";
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import authorizationType from "../../store/combineRedusers/reducers/type";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const registerList = useSelector(state => state.Register.registerList)
    const dispatch = useDispatch()
    const [user , setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',

    })
    const [errorText, setErrorText] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const handleChenge = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleClick = () => {

        if(validation()){
            dispatch({type:authorizationType.REGISTER_DATA,payload:user})
            toast.success("WELQOME SCHOOL ")
            setUser({
               firstName:'',
               lastName:'',
               email:'',
               password:'',
               confirmPassword:'',
           })
       }else {
             toast.error("PLEASE GO AFTER REGISTRATION")
        }

    }
    useEffect(()=>{
        if(registerList.length){
            localStorage.setItem("login-key",JSON.stringify(registerList))
        }
    },[registerList])

    const validation = () => {
        let validate = true
        let errorString = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
        const validateMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(!user.firstName.trim().length){
            errorString.firstName = "Fill in The Required FirstName"
            validate = false
        }

        if(!user.lastName.trim().length){
            errorString.lastName = "Fill in The Required LastName"
            validate = false

        }

        if(!user.email.trim().length){
            errorString.email = "Fill in The Required Email"
            validate = false

        }else if(!validateMail.test(user.email)){
            errorString.email = "Fill in Email"
            validate = false

        }


        if(!user.password.trim().length){
            errorString.password = " Fill in The Required Pasword"
            validate = false


        }else if(user.password.trim().length && user.password.trim().length < 8){
            errorString.password = "Should Not be Less 8"
            validate = false

        }

        if(!user.confirmPassword.trim().length){
            errorString.confirmPassword = "Fill in The Required Confirm Password"
            validate = false

        }else if(user.confirmPassword.trim().length && user.confirmPassword.trim().length !== user.password.length){
            errorString.confirmPassword = "Do Not Correspond to Each Other Confirm Password and Password"
            validate = false
        }

        setErrorText(errorString)
       return validate
    }
     return   <section className="form-section">
         <div className="G-continer">
             <div className="form-name"><h1>School REGISTRATION FORM</h1></div>
             <div className="registr-section">
                 <div className="registr-deatals">
                     <div className="input-name">Name</div>
                     <div className="input-deatls">
                         <div className="p-input">
                             <label>
                                 <input onChange={handleChenge} value={user.firstName}  name="firstName" type="text" placeholder='First Name'/>
                                 <p>{errorText.firstName}</p>
                             </label>
                         </div>
                         <div className="p-input">
                             <label>
                                 <input onChange={handleChenge}  value={user.lastName} name="lastName" type="text" placeholder='Last Name'/>
                                 <p>{errorText.lastName}</p>
                             </label>
                         </div>
                     </div>
                 </div>

                 <div className="registr-deatals">
                     <div className="input-name">Email</div>
                     <div className="input-deatls">
                         <div className="p-input">
                             <label>
                                 <input onChange={handleChenge} value={user.email} name="email" type="text" placeholder='Email'/>
                                 <p>{errorText.email}</p>
                             </label>
                         </div>
                     </div>
                 </div>
                 <div className="registr-deatals">
                     <div className="input-name">Password</div>
                     <div className="input-deatls">
                         <div className="p-input">
                             <label>
                                 <input onChange={handleChenge} value={user.password} name='password' type="text" placeholder='Password'/>
                                 <p>{errorText.password}</p>

                             </label>
                         </div>
                         <div className="p-input">
                             <label>
                                 <input onChange={handleChenge} value={user.confirmPassword} name="confirmPassword" type="text" placeholder='Confirm Password'/>
                                 <p>{errorText.confirmPassword}</p>
                             </label>
                         </div>
                     </div>
                 </div>

                 <div className="registr-final">
                     <div className="final-check"><h1>Are you an existing customer?</h1></div>
                     <div className="p-checkbox">
                         <input type="radio" name="radio1"/> <span>Yes</span>
                         <input type="radio" name="radio1"/> <span>No</span>
                     </div>
                 </div>
                 <div className="registr-submit">
                     <button onClick={handleClick} >REGISTER</button>
                     <ToastContainer />

                 </div>


             </div>
         </div>
     </section>
}
export default Register