import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { username, email, photoURL, age } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <h2>User data:</h2>
        </div>
        <div className="card-body">
          <p><strong>Username: </strong>{username}</p>
          <p><strong>Email: </strong>{email}</p>
          <p><strong>Photo URL: </strong>{photoURL}</p>
          <p><strong>Age: </strong>{age}</p>
        </div>
      </div>
    );
  }
}

export default Card;
