import React, { Component } from "react"
import HornedBeasts from "./HornedBeasts"
class Main extends Component {
  render() {
    const { data, onShow, onSearch, search } = this.props

    const filteredBeast = data.filter((beast) =>
      beast.keyword.includes(search.toLowerCase())
    )
    return (
      <React.Fragment>
        <div className="inputField">
          <label className="m-2">Search for beast:</label>
          <input
            onChange={onSearch}
            type="text"
            placeholder="Enter beast keyword"
          />
        </div>
        <div className="hornedBeasts">
          {filteredBeast.map((beast, key) => {
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
