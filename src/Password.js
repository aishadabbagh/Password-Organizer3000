import React, {Component} from "react";

class Password extends Component{
render(){
    const list = this.props.acc.Website.map(website => {
       return <li>{website.site}: {website.pass}</li>
    })
    return(
        <>
        <h1>{this.props.acc.Email}</h1>
        <ul>{list}</ul>
        </>
    )
}
}
export default Password;