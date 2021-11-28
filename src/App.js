import React from 'react';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: {},
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    const country = await (
      await fetch('https://restcountries.com/v2/alpha/br')
    ).json();
    this.setState({ country });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
      </div>
    );
  }
}

export default App;
