import React,{ Component } from 'react';
import './todoapp.css'
class TODO extends Component {
    state = {
        task: '',        
        tasks: []        
      };
  
    // Method to handle task input change
    handleInputChange = (event) => {
      this.setState({ task: event.target.value });
    };
  
    // Method to handle form submission and add a task to the list
    handleAddTask = (event) => {
      event.preventDefault(); // Prevent the default form submit behavior
      if (this.state.task.trim() !== '') {
        this.setState((prevState) => ({
          tasks: [...prevState.tasks, prevState.task],
          task: '' // Reset the input field after adding the task
        }));
      }
    };
  
    // Method to delete a task from the list
    handleDeleteTask = (index) => {
      this.setState((prevState) => {
        const updatedTasks = prevState.tasks.filter((task, taskIndex) => taskIndex !== index);
        return { tasks: updatedTasks };
      });
    };
  
    render() {
      return (
        <div className="todo">
          <h1>To-Do List</h1>
          <form onSubmit={this.handleAddTask}>
            <input
              type="text"
              placeholder="Add a new task"
              value={this.state.task}
              onChange={this.handleInputChange}
            />
            <button type="submit">Add Task</button>
          </form>
  
          <ul>
            {this.state.tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => this.handleDeleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
export default TODO