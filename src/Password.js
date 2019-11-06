import React, {Component} from "react";

class Password extends Component{
constructor(props){
    super(props);
    this.state={
        newItem: "",
    }
}
    onTextBoxChange = (event) => {
        console.log("On Text Change", event.target.value);
        this.setState({
          newItem: event.target.value

        });
      };

      
render(){
    let list = <p>Nothing</p>;

    if (this.props.acc.Website) {
        list = this.props.acc.Website.map(website => {
           return <li>
                {website.site}: {website.pass} 
                <button className = "update" >Update </button>

            <input
            type="text"
            placeholder="type a task"
            value={this.state.newItem}
            onChange={this.onTextBoxChange}
            />
            </li>
        });

    }


    return(
        <>
        <h1>{this.props.acc.Email}</h1>
        <ul>{list}</ul>
        </>
    )
}
}
export default Password;
