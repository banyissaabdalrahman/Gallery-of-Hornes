import "./styles/styles.css"
import React, { Component } from "react"
import data from "./helpers/data.json"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import SelectedBeast from "./components/SelectedBeast"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      url: "",
      title: "",
      description: "",
      search: "",
      selectedValue: data,
    }
  }

  handleClose = () => this.setState({ show: false })

  handleShow = (event) =>
    this.setState({
      show: true,
      title: event.target.title,
      url: event.target.src,
      description: event.target.alt,
    })

  handleSearch = (event) => {
    this.setState({ search: event.target.value })
  }

  handleSelectedValue = (event) => {
    this.setState({
      selectedValue: data.filter((item) => {
        if (item.horns === parseInt(event.target.value)) return item
        else if (parseInt(event.target.value) === 0) return item
      }),
    })
  }

  render() {
    const { show, url, title, description, search, selectedValue } = this.state
    return (
      <div className="appContainer">
        <Header
          onSearch={this.handleSearch}
          onSelectedValue={this.handleSelectedValue}
        />
        <Main
          data={data}
          search={search}
          selectedValue={selectedValue}
          onShow={this.handleShow}
          onSearch={this.handleSearch}
          onSelectedValue={this.handleSelectedValue}
        />
        <SelectedBeast
          onClose={this.handleClose}
          show={show}
          title={title}
          url={url}
          description={description}
        />
        <Footer />
      </div>
    )
  }
}

export default App
