import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
    };
  }
  btn = document.createElement("button");
  textInBtn = document.createTextNode("Generate");
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.results,
          loading: true,
        });
      });
  }
  render() {
    var { items, loading } = this.state;
    if (!loading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="container">
          {items.map((item) => (
            <img scr={item.picture.thumbnail} />
          ))}
          {items.map((item) => (
            <h5>
              {item.name.first} {item.name.last} {item.email}
            </h5>
          ))}
          {items.map((item) => (
            <img scr="{item.picture.small}">{item.picture.small}</img>
          ))}
        </div>
      );
    }
  }
}

export default App;
