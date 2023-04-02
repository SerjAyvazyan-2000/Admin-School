import React, {useEffect, useState} from "react";
import "./style.scss"
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const ChildrenDetails = () => {
    const childrenList = useSelector(state => state.AddChildren.childrenList)
     const {id} = useParams()
    const [childrenDetails, setChildrenDetails] = useState({
        firstName:'',
        lastName:'',
        address:'',
        phoneNumber:''
    })



    useEffect(()=>{
         childrenList.forEach((item,index)=>{
              if(index === +id){
                  setChildrenDetails(item)
              }
         })
    },[])



    return <div className="children-details">
      <h1>CHILDREN INFORMATION</h1>

            <div className="children-details-box">
                <h2>FirstName : <span>{childrenDetails.firstName}</span></h2>
                <h2>LastName : <span>{childrenDetails.lastName}</span></h2>
                <h2>Address : <span>{childrenDetails.address}</span></h2>
                <h2>PhoneNumber : <span>{childrenDetails.phoneNumber}</span></h2>

            </div>
    </div>
}
export default ChildrenDetails