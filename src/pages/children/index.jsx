import React, {useEffect, useState} from "react";
import "./style.scss"
import AddChildren from "./add-children";
import {useDispatch, useSelector} from "react-redux";
import childrenImg from  "../../assets/image/images.jpg"
import authorizationType from "../../store/combineRedusers/reducers/type";
import "../../assets/style/icoon/style.css"
import {Link} from "react-router-dom";

const Children = () => {
    const childrenList = useSelector(state => state.AddChildren.childrenList)
    const dispatch = useDispatch()
    const [openModal,setOpenModal] = useState(false)
    const [editItem , setEditItem] = useState(null)


    const handleClick = () => {
         setOpenModal(!openModal)

    }

    const editChildren = (item ,index,e) => {

        setEditItem(item)
        handleClick()
        e.preventDefault()

    }
    const deleteChildren = (index,e) => {
         dispatch({type:authorizationType.DELETE_CHILDREN_DATA,payload:index})
        e.stopPropagation()
        e.preventDefault()
    }


useEffect(()=>{
      dispatch({type:authorizationType.CHECK_CHILDREN_DATA})
},[])


    return <div className="p-people-block">
          <h1>Schools Children</h1>
        <div className="add-Children-tools">
            <button onClick={handleClick} className="btn-add-Children">
                <span>ADD</span>
                <div className="liquid"></div>
            </button>
        </div>

         <div className="children-list G-container">
             {childrenList.length ? childrenList.map((item,index)=>{
                 return <Link to={`/children-details/${index}`} key={index} className="children-img" style={{backgroundImage:`url(${childrenImg})`}} >
                     <div className="children-tools-icon">
                         <span onClick={(e)=>editChildren(item,index,e)}  className="icon-pencil2"></span>
                         <span onClick={(e)=>deleteChildren(index,e)}  className="icon-cross"></span>
                     </div>
                 </Link>
             }):null}
         </div>
        {openModal? <AddChildren editItem = {editItem} openClose={handleClick}/> :null}
    </div>
}
export default Children