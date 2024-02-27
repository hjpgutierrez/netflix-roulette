import React from "react";
import Multiselect from "multiselect-react-dropdown";

export default class GenreSelect extends React.Component {
  state = {};
  onSelectCallback;

  constructor(props) {
    super(props);
    this.state = {
      options: props.displayList,
      selectedValue: props.selectedGenre,
    };
    this.onSelectCallback = props.onSelect;
  }

  render() {
    return (
      <Multiselect
        options={this.state.options}
        selectedValues={this.state.selectedValue}
        onSelect={this.onSelectCallback}
        displayValue="name"
        showCheckbox={true}
        avoidHighlightFirstOption={true}
        showArrow={true}
      />
    );
  }
}
