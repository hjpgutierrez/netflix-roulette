import React from 'react';

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

    incrementClick = (e) => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrementClick = (e) => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {

        return React.createElement(
            "span",{className: "badge bg-secondary"},  this.state.count,
            React.createElement( "button",{ className: "btn btn-danger", onClick: this.decrementClick },"-"),
            React.createElement("button",{ className: "btn btn-success", onClick: this.incrementClick },"+")
          );
    }
  }