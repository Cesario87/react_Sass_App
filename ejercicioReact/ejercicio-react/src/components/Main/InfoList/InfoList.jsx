import React, { Component } from "react";
import InfoItem from './InfoItem';
import data from './citas.json';
import { v4 as uuidv4 } from 'uuid';

class InfoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: data, //[] de datos iniciales
      newAutor: "", //Nombre del evento que estoy creando
    }
  }

  deleteEvent = (i) => {
    const remainingEvents = this.state.events.filter((event, j) => i !== j);
    this.setState({ events: remainingEvents })
  }


  printCards = () => this.state.events.map((event, i) => <InfoItem data={event} remove={() => this.deleteEvent(i)} key={uuidv4()} />)

  removeAllEvents = () => {
    this.setState({ events: [] })
  }

  restoreEvents = () => {
    this.setState({ events: data })
  }


  handleSubmit = (event) => {
    event.preventDefault();

    const autor = event.target.autor.value;
    const image = event.target.image.value;
    const frase = event.target.info.value;
    const año = event.target.price.value;

    const newEvent = {
      autor,
      image,
      frase,
      año
    };

    alert("Enviado!!!");
    this.setState({ events: [...this.state.events, newEvent] });
  }

  handleChange = (event) => this.setState({ newAutor: event.target.value })

  render() {
    return <section>
      <h2>Citas celebres</h2>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="autor">Autor</label><br />
        <input type="text" id="autor" name="autor" onChange={this.handleChange} /><br />
        <label htmlFor="info">Frase:</label><br />
        <input type="text" id="info" name="info" /><br />
        <label htmlFor="price">Año:</label><br />
        <input type="number" id="price" name="price" /><br />
        <label htmlFor="image">URL imágen:</label><br />
        <input type="url" id="image" name="image" /><br />
        <input type="submit" value="Añadir" />
      </form>

      <button onClick={this.removeAllEvents}>Eliminar todos</button>
      <button onClick={this.restoreEvents}>Restaurar todos</button>

      {this.printCards()}

    </section>;
  }
}

export default InfoList;