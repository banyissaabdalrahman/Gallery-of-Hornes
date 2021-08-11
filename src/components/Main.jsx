import React, { Component } from "react"
import { Form } from "react-bootstrap"
import HornedBeasts from "./HornedBeasts"
class Main extends Component {
  render() {
    const { onShow, onSearch, search, onSelectedValue, selectedValue } =
      this.props
    const filteredBeast = selectedValue.filter((beast) =>
      beast.keyword.includes(search.toLowerCase())
    )
    return (
      <React.Fragment>
        <Form className="m-2">
          <Form.Select onChange={onSelectedValue}>
            <option value="0">All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">woow</option>
          </Form.Select>
        </Form>
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
