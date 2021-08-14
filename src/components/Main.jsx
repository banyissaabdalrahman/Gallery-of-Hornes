import React, { Component } from "react"
import HornedBeasts from "./HornedBeasts"
class Main extends Component {
  render() {
    const { onShow, search, selectedValue } = this.props
    const filteredBeast = selectedValue.filter((beast) =>
      beast.keyword.includes(search.toLowerCase())
    )
    return (
      <React.Fragment>
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
