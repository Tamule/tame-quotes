import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = { 
    advice: '' 
} 


  componentDidMount () {
    this.fetchAdvice();
  }
 
  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
       .then((response) => {
        const {advice} = response.data.slip;

        this.setState({advice: advice});

       })
      .catch((error) => {
      console.log(error);
      });

  }
  render() {

    const {advice} = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
          <footer className="footer">
          This project was coded by Tamule Waites and is
          <a
            href="https://github.com/Tamule/tame-quotes"
            target="blank"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          
        </footer>
        </div>
    </div>

    );
  }
}

export default App;
