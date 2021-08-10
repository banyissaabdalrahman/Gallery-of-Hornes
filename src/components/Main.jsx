import React, { Component } from "react"
import HornedBeasts from "./HornedBeasts"
class Main extends Component {
  render() {
    const { data, onShow, onSearch } = this.props
    return (
      <React.Fragment>
        <div className="inputField">
          <input
            onChange={onSearch}
            type="text"
            placeholder="Enter beast name"
          />
          <button className="btn btn-primary btn-sm m-2">search</button>
        </div>
        <div className="hornedBeasts">
          {data.map((beast, key) => {
            return (
              <div key={key}>
                <HornedBeasts
                  title={beast.title}
                  url={beast.image_url}
                  description={beast.description}
                  onShow={onShow}
                />
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}

export default Main
