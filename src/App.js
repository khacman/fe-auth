import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    submitHandler(event) {
        event.preventDefault();
        console.log(event);
        fetch("http://localhost:9999/auth").then(res => {
            console.log(res.json());
        });
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div style={{marginBottom: "50px"}}></div>
        <main>
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    Email:<input type="email" className="form-controller" required={true}/>
                </div>
                <div className="form-group">
                    Password: <input type="password" className="form-controller" required={true}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </main>
      </div>
    );
  }
}

export default App;
