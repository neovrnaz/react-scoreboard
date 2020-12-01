import React, { Component } from 'react';

class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    const { value } = this.state;
    const { addPlayer } = this.props;
    e.preventDefault();
    addPlayer(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={this.handleValueChange}
          placeholder="Enter a player's name"
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
