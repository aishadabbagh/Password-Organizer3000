import React, {Component} from "react";
import UserEmailList from "./Functionalities_MainP/UserEmailList";
import './App.css';
import Search from "./Functionalities_MainP/Search";
import Password from "./Password";




class App extends Component{
  constructor(props){
    super(props);

    //To search for the user's Account
    //Creating text box
    this.state ={
    searchValue: "",
    accounts: this.props.userEmails,
    accountsToBeDisplayed: this.props.userEmails,
    newItem: "",
    selectedAcc: null
    } 
  } 

  accInfo = (email) => {
    const account = this.state.accounts.find(account => {
      return account.Email.toLowerCase() == email.toLowerCase()
    });

    this.setState({
      selectedAcc: account
    })

  }
    //////////deleting all items/////////
    clearList = (event) => {
      this.setState({
    accountsToBeDisplayed: [],
    accounts: []
      });
  }

    /////////////Search//////////////
    //Function that processes the user input

    handleSearchChange = (event) =>{
    //getting user input(input from user uses Value always)
    const userValue = event.target.value
     //Filtering accounts
     console.log(this.props.userEmails)
     const filteredAccounts = this.state.accounts.filter(function(desiredEmail) {
     //used toLowerCase function to prevent Lower case/Upper Case conflict 
       return desiredEmail.Email.toLowerCase().includes(userValue.toLowerCase());
     }); 
     this.setState({
       searchValue: userValue,
       accountsToBeDisplayed: filteredAccounts
     }) 
   }
      // Function handling the change of adding and deleting
      onTextBoxChange = (event) => {
        console.log("On Text Change", event.target.value);
        
        this.setState({
          newItem: event.target.value
        });
      };
      
    /////////////adding////////////// 
     addAccount = () => {
      const test ={
        id: this.state.accounts.length+1,
        Email:this.state.newItem
      }
      console.log(this.state.newItem);
        this.setState({
         //spread combines the old account list with the new element 
        accounts: [...this.state.accounts, test] ,
        newItem: "" ,
        accountsToBeDisplayed: [...this.state.accounts, test]
       })
       console.log(this.state.accounts)
     }

     ////////////delete a certain email//////////
     removeAccount = (email) => {
       const accounts = [...this.state.accounts];
       console.log("//////////-----/////0:",email, '././././././././', accounts);
       const accountIndex = accounts.findIndex((account)=>{
         return account.Email === email;
       })
       console.log(accountIndex)
       accounts.splice(accountIndex,1);
       
       console.log(accountIndex)

       this.setState({
        accounts: accounts,
        accountsToBeDisplayed: accounts
      });
     }


  render(){

 

    let page = <>
    <Search value={this.state.searchValue}
      //inserting the value in the text 
      onChange={this.handleSearchChange} />
      <UserEmailList delete={this.removeAccount} userEmails={this.state.accountsToBeDisplayed} handleClickEvent={this.accInfo}/>
      {/* box to add or delete */}
       <input
          type="text"
          placeholder="type a task"
          value={this.state.newItem}
          onChange={this.onTextBoxChange}
        />
        <button onClick={this.addAccount}> Add email</button> 
       <button onClick={this.clearList}>Delete all emails</button> 
    </>
       if(this.state.selectedAcc){
         page=<>
         <button onClick={()=>{this.setState({selectedAcc:null})}}>GOING BACK</button>
         <Password acc = {this.state.selectedAcc}/></>
       }
  return (

    <div className="App">
      <h1>Password Organizer 3000</h1>
      {page}
    </div>
    );
  }
}
export default App;
