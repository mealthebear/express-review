import React, { Component } from 'react';

import ListEntry from './ListEntry';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
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
          
        </div>
      </div>
    );
  }
}

export default List;
