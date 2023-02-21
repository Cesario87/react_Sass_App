import React, { Component } from "react";
import InfoItem from './InfoItem';
import data from './tareas.json';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';

class InfoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: data, // Inicializamos con los datos del archivo JSON
      newTask: "",
    };
  }

  // componentDidMount() {
  //   fetch('tareas.json')
  //     .then(response => response.json())
  //     .then(data => this.setState({ tasks: data }));
  // }

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
          id="taskName"
          label="Your task"
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