"use strict";

const e = React.createElement;

class JSButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  render() {
    if (this.state.isClicked) {
      return `Greetings ${this.props.name}!`;
    }

    return e(
      "button",
      { onClick: () => this.setState({ isClicked: true }) },
      this.props.buttonName
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll(".js_button_container").forEach(domContainer => {
  // Read the data from a data-* attribute.
  const { name, buttonname } = domContainer.dataset;
  ReactDOM.render(e(JSButton, { name, buttonName: buttonname }), domContainer);
});
