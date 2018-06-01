import React, { Component } from 'react';
import { render } from 'react-dom';
import Audio from './components/Audio.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      play: false,
      display: '_ _ _',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  handleClick(id, event) {
    const name = event.target.id;
    const el = document.getElementById(id);
    !this.state.play && el.play();
    this.setState({
      play: true,
      display: name,
    })
  }

  handleEnd(desc) {
    const el = document.getElementById(desc);
    el.blur();
    this.setState({
      play: false,
      display: '_ _ _',
    })
  }

  handleKeyPress() {
    const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    if (keys.includes(event.key.toUpperCase())) {
      const el = document.getElementById(event.key.toUpperCase());
      const par = el.parentElement;
      par.focus();
      const name = par.getAttribute('id');
      !this.state.play && el.play();
      this.setState({
        play: true,
        display: name,
      })
      el.onended = function() {
        par.blur();
      }
    }
  }

  render() {
    const audioPads = [
      {
        id: 'Q',
        desc: 'test1',
        src: 'AudioTest.wav'
      },
      {
        id: 'W',
        desc: 'test2',
        src: 'AudioTest.wav'
      },
      {
        id: 'E',
        desc: 'test3',
        src: 'AudioTest.wav'
      },
      {
        id: 'A',
        desc: 'test4',
        src: 'AudioTest.wav'
      },
      {
        id: 'S',
        desc: 'test5',
        src: 'AudioTest.wav'
      },
      {
        id: 'D',
        desc: 'test6',
        src: 'AudioTest.wav'
      },
      {
        id: 'Z',
        desc: 'test7',
        src: 'AudioTest.wav'
      },
      {
        id: 'X',
        desc: 'test8',
        src: 'AudioTest.wav'
      },
      {
        id: 'C',
        desc: 'test9',
        src: 'AudioTest.wav'
      }
    ];
    const pads = audioPads.map(
      (pad) => {
        return (
          <Audio key={pad.id} id={pad.id } desc={pad.desc}
            src={pad.src} click={this.handleClick} end={this.handleEnd}>
          </Audio>
        )
      }
    )
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
        </p>
        <div id="drum-machine">
          <div id="display">
            {this.state.display}
          </div>
          {pads}  
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));