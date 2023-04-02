import React, {useEffect, useState} from "react";
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import authorizationType from "../../../store/combineRedusers/reducers/type";

const AddChildren = ({openClose,editItem}) => {
    const  childrenList = useSelector(state => state.AddChildren.childrenList)
    const dispatch = useDispatch()
    const  [children , setChildren] = useState({
        firstName:'',
        lastName:'',
        address:'',
        phoneNumber:''
    })
    const [errorText , setErrorText] = useState({
        firstName:'',
        lastName:'',
        address:'',
        phoneNumber:''
    })
    useEffect(()=>{
        setChildren(editItem)
    },[])



    const handleChange = (e) => {
          setChildren({...children,[e.target.name]:e.target.value})
          setErrorText({...errorText,[e.target.name]:''})
    }
    const handleClick = () => {
       if(validation()){
           dispatch ({type:authorizationType.SET_CHILDREN_DATA,payload:children})
           setChildren({...children,
               firstName:'',
               lastName:'',
               address:'',
               phoneNumber:''
           })
       }
    }

useEffect(()=>{
    localStorage.setItem("children-list",JSON.stringify(childrenList))
},[childrenList])

    const validation = () => {
        let validate = true
         let errorString = {
             firstName:'',
             lastName:'',
             address:'',
             phoneNumber:''
         }
       if(!children.firstName.trim().length){
            errorString.firstName = "Fill in The Required firstName"
            validate = false
       }
        if(!children.lastName.trim().length){
            errorString.lastName = "Fill in The Required lastName"
            validate = false
        }
        if(!children.address.trim().length){
            errorString.address = "Fill in The Required address"
            validate = false
        }
        if(!children.phoneNumber.trim().length){
            errorString.phoneNumber = "Fill in The Required phoneNumber"
            validate = false
        }

        setErrorText(errorString)
        return validate

    }

    return <div className="children-modal-block">
          <div onClick={openClose} className="children-modal-bg"></div>
          <div className="children-modal-content">
              <div className="children-information">
                  <h2>ADD CHILDREN</h2>
                  <div className="children-add-tools">
                      <div className="tools-name">
                             <span>FirstName</span>
                      </div>
                         <div className="tools-add">
                             <label>
                                 <input   onChange={handleChange} type="text" name="firstName" placeholder="Search firstName... "/>
                                 <p>{errorText.firstName}</p>
                             </label>
                         </div>
                  </div>
                  <div className="children-add-tools">
                      <div className="tools-name">
                          <span>LastName</span>
                      </div>
                      <div className="tools-add">
                          <label>
                              <input  onChange={handleChange} type="text" name="lastName" placeholder="Search lastName... "/>
                              <p>{errorText.lastName}</p>
                          </label>
                      </div>
                  </div>

                  <div className="children-add-tools">
                      <div className="tools-name">
                          <span>Address</span>
                      </div>
                      <div className="tools-add">
                          <label>
                              <input  onChange={handleChange} type="text" name="address" placeholder="Search address... "/>
                              <p>{errorText.address}</p>
                          </label>
                      </div>
                  </div>

                  <div className="children-add-tools">
                      <div className="tools-name">
                          <span>PhoneNumber</span>
                      </div>
                      <div className="tools-add">
                          <label>
                              <input  onChange={handleChange} type="text" name="phoneNumber" placeholder="Search phoneNumber... "/>
                              <p>{errorText.phoneNumber}</p>
                          </label>
                      </div>
                  </div>


              </div>

              <div className="submit">
                  <button onClick={handleClick} >Submit</button>
                  <button onClick={openClose} >Close</button>
              </div>
          </div>
    </div>
}

export default AddChildren