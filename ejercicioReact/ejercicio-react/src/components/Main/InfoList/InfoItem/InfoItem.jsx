import React, { Component } from "react";
import './InfoItem.css'

class InfoItem extends Component {
  //rconst
  constructor(props) {
    super(props)

    this.state = {
      event:this.props.data 
    }
  }

  render() {
    return (<article>
      <h2>{this.props.data.autor}</h2>
      <img src={this.props.data.image} alt="imagen de evento" className="img_event"/>
      <p>{this.props.data.frase}</p>
      <p>{this.props.data.año}</p>
      <button onClick={this.props.remove}>Delete</button>
      </article>
    )
  }
}

export default InfoItem;
