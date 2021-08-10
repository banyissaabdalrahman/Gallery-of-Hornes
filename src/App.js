import "./App.css"
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

  render() {
    return (
      <div className="container">
        <Header />
        <Main
          data={data}
          onShow={this.handleShow}
          onSearch={this.handleSearch}
          search={this.state.search}
        />
        <SelectedBeast
          onClose={this.handleClose}
          show={this.state.show}
          title={this.state.title}
          url={this.state.url}
          description={this.state.description}
        />
        <Footer />
      </div>
    )
  }
}

export default App
