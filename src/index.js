
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// function JordanIsDumb(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       Is Jordan Dumb?
//     </button>
//   );
// }

class App extends React.Component {

  handleClick() {
    this.state.isClicked.setState(true);
  }

  render() {
    return (
      <h2 contentEditable="true">Jordan is Dumb</h2>
    );
  }
}


// ========================================

ReactDOM.render(<App />, document.getElementById("root"));




