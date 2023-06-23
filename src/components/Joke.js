import React, { Component } from 'react';

class JokeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: '',
      jokeNumber: 1
    };
  }

  componentDidMount() {
    this.fetchJoke();

    this.interval = setInterval(() => {
      this.updateJokeNumber();
      this.fetchJoke();
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateJokeNumber = () => {
    this.setState((prevState) => {
      const nextJokeNumber = prevState.jokeNumber === 3 ? 1 : prevState.jokeNumber + 1;
      return {
        jokeNumber: nextJokeNumber
      };
    });
  };

  fetchJoke = async () => {
    try {
      const response = await fetch(`http://localhost:8080/sem3_exam_war_exploded/api/jokes/id/${this.state.jokeNumber}`);
      const data = await response.json();
      this.setState({ joke: data.joke });
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  render() {
    const { joke } = this.state;

    return (
      <div>
        {joke}
      </div>
    );
  }
}

export default JokeComponent;
