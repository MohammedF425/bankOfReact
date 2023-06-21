// src/components/UserProfile.js

import React, {Component} from 'react';

class UserProfile extends Component {
  render() {
    return (
        
        <div>
          <h1 class="text-center">User Profile</h1>

          <div class="text-center">Username: {this.props.userName}</div>
          <div class="text-center">Member Since: {this.props.memberSince}</div>
        </div>
    );
  }
}

export default UserProfile;