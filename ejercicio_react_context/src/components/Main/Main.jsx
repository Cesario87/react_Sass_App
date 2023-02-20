import React, { Component } from "react";
import Card from './Card';
import Form from './Form';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      photoURL: '',
      age: ''
    };
  }

  handleDataChange = (data) => {
    this.setState({
      username: data.username,
      email: data.email,
      photoURL: data.photoURL,
      age: data.age
    });
  }

  render() {
    return (
      <div>
        <Form onDataChange={this.handleDataChange} />
        <Card
          username={this.state.username}
          email={this.state.email}
          photoURL={this.state.photoURL}
          age={this.state.age}
        />
      </div>
    );
  }
}

export default Main;
