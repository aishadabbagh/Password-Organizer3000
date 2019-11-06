import React, { Component } from "react";
import UserEmailList from "./Functionalities_MainP/UserEmailList";
import "./App.css";
import Search from "./Functionalities_MainP/Search";
import Password from "./Password";

class App extends Component {
  constructor(props) {
    super(props);
    //To search for the user's Account
    //Creating text box
    this.state = {
      searchValue: "",
      accounts: this.props.userEmails,
      accountsToBeDisplayed: this.props.userEmails,
      newItem: "",
      //this variable is intended for rendering components when pressing an email
      selectedAcc: null,
      value: {}
    };
  }

  //////Display informatio for each email///////
  accInfo = email => {
    const account = this.state.accounts.find(account => {
      return account.Email.toLowerCase() == email.toLowerCase();
    });

    this.setState({
      selectedAcc: account
    });
  };

  //////////deleting all items/////////
  clearList = () => {
    this.setState({
      accountsToBeDisplayed: [],
      accounts: []
    });
  };

  /////////////Search//////////////
  //Function that processes the user input
  handleSearchChange = event => {
    const userValue = event.target.value;
    //Filtering accounts
    console.log(this.props.userEmails);
    const filteredAccounts = this.state.accounts.filter(function(desiredEmail) {
      return desiredEmail.Email.toLowerCase().includes(userValue.toLowerCase());
      //used toLowerCase function to prevent Lower case/Upper Case conflict
    });
    this.setState({
      searchValue: userValue,
      accountsToBeDisplayed: filteredAccounts
    });
  };

  /////Function handling the change of adding and deleting///
  onTextBoxChange = event => {
    console.log("On Text Change", event.target.value);

    this.setState({
      newItem: event.target.value
    });
  };

  ////////////Updating information in Password page
  onTextBoxChangeE = (event, i) => {
    console.log("On Text Change", event.target.value);
    const newValue = this.state.value;
    newValue["key" + i] = event.target.value;
    this.setState({
      value: newValue
    });
  };

  //////////Update///////////
  updateAccInfo = (email, site, i) => {
    console.log(this.state.value['key'+i]);
    const newAccounts = this.state.accounts;
    const accountIndex = newAccounts.findIndex(account=> account.Email == email);
    const siteIndex = newAccounts[accountIndex].Website.findIndex(wsite => wsite.site == site);
    newAccounts[accountIndex].Website[siteIndex].pass = this.state.value['key'+i];

    this.setState({
      accounts: newAccounts
    })
    
    // value = this.state.value;
    // email=
    // this.setState({

    // })
    // const account = this.state.accounts.find(account => {
    // console.log(account.Email.toLowerCase()
    // == email.toLowerCase());
    //   })
  };
  // changeBody = (e) =>{
  // console.log("button clicked");
  // const newBody = prompt("what should the new body be?")
  // this.setState({
  //   body: this.state.body = newBody
  // });
  // }

  /////////////adding//////////////
  addAccount = () => {
    const test = {
      id: this.state.accounts.length + 1,
      Email: this.state.newItem
    };
    console.log(this.state.newItem);
    this.setState({
      //spread combines the old account list with the new element
      accounts: [...this.state.accounts, test],
      newItem: "",
      accountsToBeDisplayed: [...this.state.accounts, test]
    });

    console.log(this.state.accounts);
  };

  ////////////delete a certain email//////////
  removeAccount = email => {
    const accounts = [...this.state.accounts];
    console.log("//////////-----/////0:", email, "././././././././", accounts);
    const accountIndex = accounts.findIndex(account => {
      return account.Email === email;
    });
    console.log(accountIndex);
    accounts.splice(accountIndex, 1);

    console.log(accountIndex);

    this.setState({
      accounts: accounts,
      accountsToBeDisplayed: accounts
    });
  };

  render() {
    //due to tight schedule, used render to display infomration instead of a function
    let page = (
      <>
        <Search
          value={this.state.searchValue}
          //inserting the value in the text
          onChange={this.handleSearchChange}
        />
        <UserEmailList
          delete={this.removeAccount}
          userEmails={this.state.accountsToBeDisplayed}
          handleClickEvent={this.accInfo}
        />
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
    );

    if (this.state.selectedAcc) {
      page = (
        <>
          <button
            onClick={() => {
              this.setState({ selectedAcc: null });
            }}
          >
            GOING BACK
          </button>
          <Password
            updateAcc={this.updateAccInfo}
            acc={this.state.selectedAcc}
            value={this.state.value}
            onChangeE={this.onTextBoxChangeE}
          />
        </>
      );
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
