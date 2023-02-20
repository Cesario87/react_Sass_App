import React, { Component } from "react";
import Button from '@mui/material/Button';
import { userContext } from '../../../context/userContext'; // contexto

class Form extends Component {
  static contextType = userContext; //Contexto desde JS

  constructor(props) {
    super(props);

    this.username = React.createRef();
    this.email = React.createRef();
    this.photoURL = React.createRef();
    this.age = React.createRef();

    this.state = {
      username: "",
      email: "",
      photoURL: "",
      age: ""
    };
  }

  sendName = () => {
    const { username, email, photoURL, age } = this.state;
    const data = { username, email, photoURL, age };
    this.context.login(username); // pass only the username to the login function
    this.props.onDataChange(data); // call the callback prop to update the parent state
  
    alert('Data has been sent');
  
    // reset the state and clear the input fields
    this.setState({ username: '', email: '', photoURL: '', age: '' });
    this.username.current.value = '';
    this.email.current.value = '';
    this.photoURL.current.value = '';
    this.age.current.value = '';
  };

  handleChange() {
    const username = this.username.current.value; //Leer campo por referencia
    const email = this.email.current.value;
    const photoURL = this.photoURL.current.value;
    const age = this.age.current.value;
    this.setState({ username, email, photoURL, age });
  }

  render() {
    return (
      <div>
        <h1>Fill your data</h1>
        <input type="text" name="username" ref={this.username} onChange={() => this.handleChange(this.username)} placeholder="Ej: Freddie Mercury" />
        <input type="email" name="email" ref={this.email} onChange={() => this.handleChange(this.email)} placeholder="Ej: freddie.mercury@queen.com" />
        <input type="text" name="photoURL" ref={this.photoURL} onChange={() => this.handleChange(this.photoURL)} placeholder="Ej: https://example.com/image.jpg" />
        <input type="number" name="age" ref={this.age} onChange={() => this.handleChange(this.age)} placeholder="Ej: 45" />
        {this.state.username && this.state.email && this.state.photoURL && this.state.age ? <Button variant="contained" onClick={this.sendName}>Login</Button> : null}
      </div>
    );
  }
}

export default Form;
