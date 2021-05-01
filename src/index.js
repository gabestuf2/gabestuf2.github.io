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

function App2() {
  
  return <button onClick={() => {location.href = '/about.html'}}>About</button>;
}

const domContainer = document.querySelector(".root");
ReactDOM.render(e(App2), domContainer);
