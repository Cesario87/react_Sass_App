import React, { Component } from "react";
import InfoItem from './InfoItem';
import data from './tareas.json';
import { v4 as uuidv4 } from 'uuid';

class InfoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: data, //[] de datos iniciales
      newTask: "", //Nombre de la tarea que estoy creando
    }
  }

  deleteTask = (i) => {
    const remainingTasks = this.state.tasks.filter((task, j) => i !== j);
    this.setState({ tasks: remainingTasks })
  }

  printTasks = () => this.state.tasks.map((task, i) => <InfoItem data={task} remove={() => this.deleteTask(i)} key={uuidv4()} />)

  removeAllTasks = () => {
    this.setState({ tasks: [] })
  }

  restoreTasks = () => {
    this.setState({ tasks: data })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const taskName = event.target.taskName.value;

    const newTask = {
      name: taskName,
      completed: false
    };

    alert("Task added!!!");
    this.setState({ tasks: [...this.state.tasks, newTask] });
  }

  handleChange = (event) => this.setState({ newTask: event.target.value })

  render() {
    return <section>
      <h2>To do list</h2>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="taskName">Add a task:</label><br />
        <input type="text" id="taskName" name="taskName" onChange={this.handleChange} /><br />
        <input type="submit" value="Add" />
      </form>

      <button onClick={this.removeAllTasks}>Remove all tasks</button>
      <button onClick={this.restoreTasks}>Restore all tasks</button>

      {this.printTasks()}

    </section>;
  }
}

export default InfoList;