import React from "react";
import ListEmail from "./ListEmail";

//Triversing each email
const UserEmailList = props =>{
    const items = props.userEmails.map(function(item,index){
        //to specifically remove an element// 
    return<ListEmail fun={(e)=>props.fun(item)} name={item} key={index} />
    })
    return(
    <ul>
        {items}
    </ul>
    )
}
export default UserEmailList;