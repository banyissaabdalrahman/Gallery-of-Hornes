import React, { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import data from "./data.json";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div className="hornedBeasts">
        {data.map((beast, key) => {
          return (
            <div key={key}>
              <HornedBeasts
                title={beast.title}
                url={beast.image_url}
                description={beast.description}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Main;
