import React, { Component } from "react";
import Button from '@mui/material/Button';
import { userContext } from '../../../context/userContext' //contexto

class Nav extends Component {
  render() {
    return <nav>
      <userContext.Consumer>
        {({ logout, user }) => user ?
          <span>Hi, {user} <Button variant="contained" size="small" onClick={logout}>Logout</Button></span>
          : ""
        }
      </userContext.Consumer>
    </nav>;
  }
}

export default Nav;
