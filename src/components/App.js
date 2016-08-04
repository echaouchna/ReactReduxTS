import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render () {
    return (
      <div>
        <header>
          <h1>React Redux POC</h1>
          <Link to="/todo">To Do</Link>
          <Link to="/converter">Roman Converter</Link>
        </header>
        <section>
          {this.props.children || 'Welcome to React Starterify'}
        </section>
      </div>
    );
  }
}

App.propTypes = { children: React.PropTypes.object };

export default App;
