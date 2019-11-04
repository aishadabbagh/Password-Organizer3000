import React, {Component} from "react";
import UserEmailList from "./Functionalities_MainP/UserEmailList";
import './App.css';
import Search from "./Functionalities_MainP/Search";
import ListEmail from "./Functionalities_MainP/ListEmail";

class App extends Component{
  constructor(props){
    super(props);

    //To search for the user's Account
    //Creating text box
    this.state ={
    searchValue: "",
    accountsToBeDisplayed: this.props.userEmails,
    newItem: ""
    } 
  } 
    //Function handling the change of adding and deleting
    onTextBoxChange = (event) => {
      console.log("On Text Change", event.target.value);
  
      this.setState({
        newItem: event.target.value
      });
    };

    //////////deleting all items/////////
    clearList = (event) => {
      this.setState({
    accountsToBeDisplayed: []
      });
  }

    /////////////Search//////////////
    //Function that processes the user input

    handleSearchChange = (event) =>{
    //getting user input(input from user uses Value always)
    const userValue = event.target.value
    //Filtering accounts
    const filteredAccounts = this.props.userEmails.filter(function(desiredEmail) {
    //used toLowerCase function to prevent Lower case/Upper Case conflict 
      return desiredEmail.toLowerCase().includes(userValue.toLowerCase());
    }); 
    this.setState({
      searchValue: userValue,
      accountsToBeDisplayed: filteredAccounts
    }) 
  }
      /////////////adding////////////// 
     addAccount = (event) => {
        console.log("adding an account");
        this.setState({
         //spread combines the old account list with the new element 
        accountsToBeDisplayed: [...this.state.accountsToBeDisplayed,this.state.newItem,] ,
        newItem: ""  
       })
     }

     ////////////delete a certain email//////////
     removeAccount = (email) => {
       const accountsToBeDisplayed = [...this.state.accountsToBeDisplayed];
       const indexEmail= accountsToBeDisplayed.indexOf(email);
       accountsToBeDisplayed.splice(indexEmail,1);
       this.setState({accountsToBeDisplayed});
     }


  render(){
  return (

    <div className="App">
      <h1>Personal Password Organizer</h1>
      <Search value={this.state.searchValue}
      //inserting the value in the text 
      onChange={this.handleSearchChange} />
      <UserEmailList fun={this.removeAccount} userEmails={this.state.accountsToBeDisplayed}/>
      {/* box to add or delete */}
      <input
          type="text"
          placeholder="type a task"
          value={this.state.newItem}
          onChange={this.onTextBoxChange}
        />
        <button onClick={this.addAccount}> Add email</button>
        <button onClick={this.clearList}>Delete all emails</button>

    </div>
    );
  }
}
export default App;
