import React, { Component } from 'react';

class Dog extends Component {
  constructor() {
    super();

    this.saveDog = this.saveDog.bind(this);
    this.fetchDog = this.fetchDog.bind(this);

    this.state = {
      data: "",
      name: "",
      array: [],
    }
  }

  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(result => this.setState({ data: result }));
  }

  saveDog() {
    const {
      data: { message },
      name,
      array
    } = this.setState;
    const dogData = { message, name };
    const newArray= { ...array, dogData };
    this.setState({ array: newArray });
    this.setState({ name: "" });
  }

  componentDidMount() {
    if (localStorage.dogURL) {
      const parseStorage = JSON.parse(localStorage.dogURL);
      const lastDog = parseStorage[parseStorage.length - 1].message;
      return this.setState({
        data: { message: lastDog }
      });
    }
    this.fetchDog
  }

  shouldComponentUpdate(nextProp, nextState) {
    if (nextState.data.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      const dogBreed = this.state.data.message.split("/")[4];
      return alert(dogBreed);
    }
  }

  render() {
    if (this.state.data === "") return "loading..."
    return (
      <div>
        <p>Doguinhos</p>
        <button conClick={this.fecthDog}>Novo doguinho!</button>
        <div>
          <input 
            type="text"
            value={this.state.name}
            onChange={e => this.setState({name: e.target.value})}
            placeholder="digite o nome do doguinho"
          />
          <button conClick={this.saveData}>Salvar doguinho!</button>
        </div>
        <div>
          <img src={this.state.data.message} alt={this.state.data.message} />
        </div>
      </div>
    );
  }
}

export default Dog;
