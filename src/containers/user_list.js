// ### containers/user_list.js ###
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectUser } from "../actions";

class UserList extends Component {
  render() {
    let userNames = this.props.users.map(user => {
      return (
        <li className="container-fluid nav" key={user.name} onClick={() => this.props.selectUser(user)}>
          {user.name}
        </li>
      );
    });
    return <ul>{userNames}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectUser: user => {
      dispatch(selectUser(user));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
