import React from "react";

const ListEmail = (props) =>{
    return(
        <li>{props.name} <span className="material-icons" onClick={props.fun}>remove_circle </span></li>


    )
}
export default ListEmail;