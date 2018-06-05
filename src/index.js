import React, { Component } from 'react';
import { render } from 'react-dom';
import Audio from './components/Audio.js'

class App extends Component {
  
  constructor() {
    super();
    
    this.state = {
      playCount: 0,
      display: '_ _ _ _ _ _ _',
      active: [],
      activeNames: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', (event) => this.handleKeyPress(event));
  }

  handleClick(id, desc, event) {
    
    const el = document.getElementById(id);
    const par = el.parentElement;
    const name = event.target.id;
    
    // if (!this.state.play) {
      el.play();
      par.style.backgroundColor = 'blueviolet';
      par.style.transitionDuration = '150ms';
      par.style.transform = 'scale(0.95)';
      this.setState({
        playCount: this.state.playCount + 1,
        display: this.state.activeNames.concat([desc]).join(' + '),
        active: this.state.active.concat([id]),
        activeNames: this.state.activeNames.concat([desc]),
      })
    // }
  }

  
  handleKeyPress(event) {
    
    const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    
    if (keys.includes(event.key.toUpperCase())) {
      const id = event.key.toUpperCase();
      const el = document.getElementById(id);
      const par = el.parentElement;
      const name = par.getAttribute('id');
      
      // if (!this.state.play) {
        el.play();
        par.style.backgroundColor = 'blueviolet';
        par.style.transitionDuration = '150ms';
        par.style.transform = 'scale(0.95)';
        this.setState({
          playCount: this.state.playCount + 1,
          display: this.state.activeNames.concat([name]).join(' + '),
          active: this.state.active.concat([id]),
          activeNames: this.state.activeNames.concat([name]),
        })
      // }
    }
  }

  handleEnd(id, desc) {
    
    const el = document.getElementById(desc);
    el.style.backgroundColor = null;
    el.style.transform = null;
    this.setState((state) => {
      return (
        {
          playCount: state.playCount - 1,
          display:  state.playCount > 1 ? 
                    state.activeNames.slice(1, state.activeNames.length).join(' + ') :
                    '_ _ _ _ _ _ _',
          active: state.active.slice(1, state.active.length),
          activeNames: state.activeNames.slice(1, state.activeNames.length),
        }
      )
    })
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
          <Audio key={pad.id} id={pad.id } desc={pad.desc} isActive={this.state.active.includes(pad.id)}
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