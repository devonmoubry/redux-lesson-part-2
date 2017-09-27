// ### containers/user_detail.js ###
import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetail extends Component {
  render() {
    if (!this.props.user) {
      return <div>Select a user to see their details!</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.user.name}</div>
        <div>{this.props.user.bio}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.activeUser };
}

export default connect(mapStateToProps)(UserDetail);
