import React, {useEffect, useState} from "react";
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import ModalSchool from "./add-school";
import SchoolList from "./school-list";
import authorizationType from "../../store/combineRedusers/reducers/type";

const School = () => {
    const [modal , setModal] = useState(false)
    const [editData , setEditData] = useState(null)
    const [editIndex ,setEditIndex] = useState(null)
    const schoolList = useSelector(state => state.AddSchool.schoolList)
    const dispatch = useDispatch()

    
  const handleClick = () => {
      setModal(!modal)
  }
  const editSchool = (item,index,e) => {
      setEditData(item)
        setEditIndex(index)
      handleClick()
      e.preventDefault()

  }

  useEffect(()=>{
    dispatch({type:authorizationType.CHECK_SCHOOL_DATA})
  },[])

    return <div className="p-school-block G-container">
        <h1>Schools</h1>
         <div className="school-tools">
          <button onClick={handleClick} className="btn-add-school">
              <span>ADD </span>
              <div className="liquid"></div>
          </button>


         </div>
        <div className="schools-block">
            {schoolList.length?schoolList.map((item,index)=>{
                return <SchoolList editSchool = {(e)=>editSchool(item,index,e)} index={index} item={item} key ={index} />
            }) :null}
        </div>
        {modal ? <ModalSchool editData ={editData}  closeOpen = {handleClick}/> : null}
    </div>
}
export default School