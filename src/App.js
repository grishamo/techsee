import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header/header";
import SearchTesterForm from "./components/testerForm/searchTesterForm";
import Sidebar from "./components/sidebar/sidebar";
import UsersTable from "./components/mainContainer/userTable";
import UsersData from "./modules/fetchData";

// App - Main entry point of the application
//...........................................
// Application Structure:
//  <App>
//    <Header>
//    <Sidebar> 
//    <UsersTable>
// 
class App extends Component {

  state = {
    users : [],
    dataLoading: false,
    error: null
  }

  constructor(){
    super();
    this.usersData = new UsersData("https://test-api.techsee.me/api/ex/");
    this.handleTesterFormSubmit = this.handleTesterFormSubmit.bind(this);
  }

  handleTesterFormSubmit(name) {
    this.setState({dataLoading: true});

    this.usersData.get({name})
      .then( users => { 
        this.setState({users, dataLoading: false});
      })
      .catch( err => {
        console.log(err)
        const error = err
        this.setState({error, dataLoading: false});
      })
  }

  render() {
    return (
      <div className="App">
        <Header id="header" data={{ title: "Search Bugs" }} />
        <Sidebar>
            <SearchTesterForm onSubmit={this.handleTesterFormSubmit}/>
        </Sidebar>
        <UsersTable error={this.state.error} data={this.state.users} loading={this.state.dataLoading}/>
      </div>
    );
  }
}

export default App;
