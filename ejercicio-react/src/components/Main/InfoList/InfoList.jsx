import React, { Component } from "react";
import InfoItem from './InfoItem';
import data from './tareas.json';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
      title: taskName,
    };

    alert("Task added!!!");
    this.setState({ tasks: [...this.state.tasks, newTask] });
  }

  handleChange = (event) => this.setState({ newTask: event.target.value })

  render() {
    return <section className="button-set">
      <h2>TO DO LIST</h2>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="taskName">Add a task:</label><br />
        <TextField
          required
          id="taskName"
          label="Required"
          defaultValue=""
        />

        <input type="submit" value="Add" />
      </Box>

      <button onClick={this.removeAllTasks}>Remove all tasks</button>
      <button onClick={this.restoreTasks}>Restore all tasks</button>

      {this.printTasks()}

    </section>;
  }
}

export default InfoList;