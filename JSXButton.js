"use strict";

const e = React.createElement;

class JSXButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  render() {
    if (this.state.isClicked) {
      return `Greetings ${this.props.name}!`;
    }

    return (
      <button onClick={() => this.setState({ isClicked: true })}>
        {this.props.buttonTitle}
      </button>
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll(".js_button_container").forEach(domContainer => {
  // Read the data from a data-* attribute.
  const { name, buttonTitle } = domContainer.dataset;
  ReactDOM.render(e(JSXButton, { name, buttonTitle }), domContainer);
});
