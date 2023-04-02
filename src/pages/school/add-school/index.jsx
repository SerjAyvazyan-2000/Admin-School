import React, {useEffect, useState} from "react";
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import authorizationType from "../../../store/combineRedusers/reducers/type";

const ModalSchool = ({closeOpen,deleteModal,schoolIndex,editData}) => {
    const schoolList = useSelector(state => state.AddSchool.schoolList)
    const teacherList = useSelector(state => state.AddTeacher.teachersList)
    const childrenList = useSelector(state => state.AddTeacher.childrenList)

    const dispatch = useDispatch()
    const [addSchool , setAddSchool] = useState({
        schoolName: '',
        address: '',
        directorName: '',
        directorPhoneNumber: '',
        directorEmailAddress: '',
        teachersMaxCount:0,
        childrenMaxCount:0,
        fond: 0,
    })
    useEffect(()=>{
         if(editData){
              setAddSchool(editData)
         }
    },[])



    const [errorText , setErrorText] = useState({
        schoolName: '',
        address: '',
        directorName: '',
        directorPhoneNumber: '',
        directorEmailAddress: '',
    })


    const handleChenge = (e) => {
        setAddSchool({...addSchool,[e.target.name]:e.target.value})


    }
    const handleClick = () => {
        if(validation()){
             dispatch({type:authorizationType.SET_SCHOOL_DATA,payload:addSchool})
            setAddSchool({...addSchool,schoolName:'',address: '',directorName:'',directorPhoneNumber: '',directorEmailAddress:''})
        }
    }
    useEffect(()=>{
        localStorage.setItem("school-List",JSON.stringify(schoolList))
    },[schoolList])


    const validation = () => {
     let validate = true
            let errorString = {
                schoolName: '',
                address: '',
                directorName: '',
                directorPhoneNumber: '',
                directorEmailAddress: '',
            }
            const validateMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

            if(!addSchool.schoolName.trim().length){
                errorString.schoolName = "Fill in The Required SchoolName"
                validate = false
            }

            if(!addSchool.address.trim().length){
                errorString.address = "Fill in The Required Address"
                validate = false
            }

            if(!addSchool.directorEmailAddress.trim().length){
                errorString.directorEmailAddress = "Fill in The Required Email"
                validate = false

            }else if(!validateMail.test(addSchool.directorEmailAddress)){
                errorString.directorEmailAddress = "Fill in Email"
                validate = false

            }

            if(!addSchool.directorName.trim().length) {
                errorString.directorName = " Fill in The Required DirectorName"
                validate = false
            }



            if(!addSchool.directorPhoneNumber.trim().length){
                errorString.directorPhoneNumber = "Fill in The Role Reference DirectorPhoneNumber"
                validate = false


            }else if(addSchool.directorPhoneNumber.trim().length && addSchool.directorPhoneNumber.trim().length < 16){
                errorString.directorPhoneNumber = "The Review Number Cannot be Less 16"
                validate = false
            }

        setErrorText(errorString)
        return validate
        }
        const deleteSchool = () => {
           dispatch({type:authorizationType.DELETE_SCHOOL_DATA,payload:schoolIndex})
            deleteModal()

        }

    return <div className="school-modal-block">
        <div onClick={deleteModal} className="school-modal-bg"></div>
        <div className="school-modal-content">
            {deleteModal? <div className="delete-modal">
                 <h1>Do you want Delete School {schoolIndex+1}?</h1>
                 <span onClick={deleteSchool}>Yes</span><span onClick={deleteModal}>No</span>

                </div>  :

          <div className="p-school-add">

              <div className="school-list">
                  <h2>ADD SCHOOL</h2>
                  <div className="school-add-tools">
                      <div className="input-name">
                          <span>SchoolName</span>
                      </div>
                      <label>
                          <input value={addSchool.schoolName} onChange={handleChenge}   type="text" name="schoolName" placeholder="Search SchoolName..."/>
                          <h3>{errorText.schoolName}</h3>
                      </label>
                  </div>

                  <div className="school-add-tools">
                      <div className="input-name">
                          <span>Address</span>
                      </div>
                      <label>
                          <input value={addSchool.address} onChange={handleChenge}  type="text" name="address" placeholder="Search Address..."/>
                          <h3>{errorText.address}</h3>
                      </label>
                  </div>

                  <div className="school-add-tools">
                      <div className="input-name">
                          <span>DirectorName</span>
                      </div>
                      <label>
                          <input value={addSchool.directorName} onChange={handleChenge}  type="text" name="directorName" placeholder="Search DirectorName..."/>
                          <h3>{errorText.directorName}</h3>
                      </label>
                  </div>

                  <div className="school-add-tools">
                      <div className="input-name">
                          <span>DirectorPhoneNumber</span>
                      </div>
                      <label>
                          <input value={addSchool.directorPhoneNumber} onChange={handleChenge}  type="number" name="directorPhoneNumber" placeholder="Search DirectorPhoneNumber..."/>
                          <h3>{errorText.directorPhoneNumber}</h3>
                      </label>
                  </div>


                  <div className="school-add-tools">
                      <div className="input-name">
                          <span>DirectorEmailAddress</span>
                      </div>
                      <label>
                          <input value={addSchool.directorEmailAddress} onChange={handleChenge}  type="text" name="directorEmailAddress" placeholder="Search DirectorEmailAddress..."/>
                          <h3>{errorText.directorEmailAddress}</h3>
                      </label>

                  </div>

                  <div className="btn-submit">
                      <button onClick={handleClick} >Submit</button>
                      <button onClick={closeOpen}>Close</button>
                  </div>

              </div>
          </div>}

        </div>


    </div>
}

export default ModalSchool