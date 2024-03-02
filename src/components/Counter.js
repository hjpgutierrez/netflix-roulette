import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue,
    };
  }

  render() {
    return React.createElement(
      "span",
      { className: "badge bg-secondary" },
      this.state.count,
      React.createElement(
        "button",
        {
          className: "btn btn-danger",
          onClick: () => {
            this.setState({
              count: this.state.count - 1,
            });
          },
          style: { marginLeft: "10px" },
        },
        "-"
      ),
      React.createElement(
        "button",
        {
          className: "btn btn-success",
          onClick: () => {
            this.setState({
              count: this.state.count + 1,
            });
          },
          style: { marginLeft: "10px" },
        },
        "+"
      )
    );
  }
}
