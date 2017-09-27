import React, { Component } from "react";
import UserDetail from "./containers/user_detail";
import UserList from "./containers/user_list";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserList />
        <UserDetail />
      </div>
    );
  }
}

export default App;
