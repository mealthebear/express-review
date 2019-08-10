import React, { Component } from 'react';
import axios from 'axios';
import ListEntry from './ListEntry';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.getTodos = this.getTodos.bind(this);
  }

  componentDidMount() {
    // grab all the todos
    this.getTodos();
  }

  getTodos() {
    // send GET request to our server
    axios
      .get('/api')
      .then((todos) => {
        this.setState({
          todos: todos.data
        }, () => console.log(this.state))
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>List of things to do</h1>
        <form>
          <h4>New todo:</h4>
          <input/>
        </form>
        <h4>Current todos</h4>
        <div>
          {this.state.todos.map((todo, i) =>
            <ListEntry todo={todo} key={i}/>
          )}
        </div>
      </div>
    );
  }
}

export default List;
