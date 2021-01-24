import React, { Component, handleSubmit, handleChange, useEffect, useState } from 'react';
import Graph from "./pages/Graph"

class TickerForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please enter a ticker'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      Graph(this.state.value);
    }
  
    handleSubmit(event) {
      alert('A ticker was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Ticker: $
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default TickerForm