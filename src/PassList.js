import React, { Component } from "react";
//import Password from "./Password";

class UpdatingAccPass extends Component {

  render() {
    return (
      
      <div>
        <li>
          {this.props.website.site}: {this.props.website.pass}
          <button className="update" onClick={() => {this.props.updateAcc(this.props.acc, this.state.newItem )}}>Update </button>
          <input
            type="text"
            placeholder="type a task"
            value={this.props.value}
            onChange={this.props.onChangeE}
          />
        </li>
      </div>
    );
  }
}
export default UpdatingAccPass;
