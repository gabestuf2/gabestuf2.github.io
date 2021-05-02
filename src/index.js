"use strict";

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return <button onClick={() => this.setState({ liked: true })}>Like</button>;
  }
}

function HeroBG() {
  return (
    <div className="container">
      
    </div>
  );
}

const domContainer = document.querySelector(".hero-bg");
ReactDOM.render(e(HeroBG), domContainer);
