import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
    
  }

  render() {
    
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
        </p>
        <div id="drum-machine">
          <div id="display"></div>
          <div id="Q" className="drum-pad">
            <audio id="Q" className="clip" src=""></audio>
            Q
          </div>
          <div id="W" className="drum-pad">
            <audio id="W" className="clip" src=""></audio>
            W
          </div>
          <div id="E" className="drum-pad">
            <audio id="E" className="clip" src=""></audio>
            E
          </div>
          <div id="A" className="drum-pad">
            <audio id="A" className="clip" src=""></audio>
            A
          </div>
          <div id="S" className="drum-pad">
            <audio id="S" className="clip" src=""></audio>
            S
          </div>
          <div id="D" className="drum-pad">
            <audio id="D" className="clip" src=""></audio>
            D
          </div>
          <div id="Z" className="drum-pad">
            <audio id="Z" className="clip" src=""></audio>
            Z
          </div>
          <div id="X" className="drum-pad">
            <audio id="X" className="clip" src=""></audio>
            X
          </div>
          <div id="C" className="drum-pad">
            <audio id="C" className="clip" src=""></audio>
            C
          </div>   
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));