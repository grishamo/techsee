import React, { Component } from "react";
import "./searchTesterForm.css";

class SearchTesterForm extends Component {
  state = {
    testerInput: {
      value: "",
      minlength: 2,
      maxlength: 12
    },
    submitEnable: false
  };

  constructor(props) {
    super(props);
    this.handleTesterSubmit = this.handleTesterSubmit.bind(this);
  }

  handleTesterInputChange(event) {
    const value = event.target.value;
    const testerInput = this.state.testerInput;
    const submitEnable = this.isInputValid(value);
    testerInput.value = value;
    this.setState({ testerInput, submitEnable });
  }

  handleTesterSubmit(event) {
    event.preventDefault();
    if (typeof this.props.onSubmit === "function" && this.isInputValid(this.state.testerInput.value)) {
      this.props.onSubmit(this.state.testerInput.value);
    }
  }

  isInputValid(input) {
    return (
      input.length >= this.state.testerInput.minlength &&
      input.length <= this.state.testerInput.maxlength
    );
  }
  
  render() {
    return (
      <form className="testerForm" onSubmit={this.handleTesterSubmit}>
        <div className="inputContainer">
          <label htmlFor="testerInput">Tester Name: </label>
          <input
            type="text"
            id="testerInput"
            placeholder="Enter the tester name"
            value={this.state.testerInput.value}
            minLength={this.state.testerInput.minlength}
            maxLength={this.state.testerInput.maxlength}
            onChange={event => this.handleTesterInputChange(event)}
          />
        </div>
        <button
          className="submitBtn"
          disabled={!this.state.submitEnable}
          onClick={this.handleTesterSubmit}
        >
          Fetch
        </button>
      </form>
    );
  }
}

export default SearchTesterForm;
