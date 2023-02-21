import React, { Component } from "react";
import './InfoItem.css';

class InfoItem extends Component {
  //rconst
  constructor(props) {
    super(props)

    this.state = {
      task: this.props.data
    }
  }

  render() {
    return (<article className="button-set">
      <label>{this.props.data.title}</label>
      <button onClick={this.props.remove}>🗑</button>
    </article>
    )
  }
}

export default InfoItem;