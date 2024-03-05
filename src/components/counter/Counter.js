import React, { Fragment } from "react";

export default class Counter extends React.Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue ? props.initialValue : 0,
    };
  }

  render() {
    const counter = React.createElement(
      "span",
      { className: "badge bg-secondary", "data-cy": "counter", key: "counter" },
      this.state.count
    );

    const decrementButton = React.createElement(
      "button",
      {
        className: "btn btn-danger",
        "data-cy": "decrement",
        key: "decrement",
        onClick: () => {
          this.setState({
            count: this.state.count - 1,
          });
        },
        style: { marginLeft: "10px" },
      },
      "-"
    );
    const incrementButton = React.createElement(
      "button",
      {
        className: "btn btn-success",
        "data-cy": "increment",
        key: "increment",
        onClick: () => {
          this.setState({
            count: this.state.count + 1,
          });
        },
        style: { marginLeft: "10px" },
      },
      "+"
    );

    const Components = [counter, decrementButton, incrementButton];
    return <Fragment>{Components}</Fragment>;
  }
}
