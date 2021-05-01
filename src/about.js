"use strict";

const e = React.createElement;

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return (
      <div className="about">
        <h2>about</h2>
      </div>
    );
  }
}

const domContainer = document.querySelector(".about-root");
ReactDOM.render(e(About), domContainer);
