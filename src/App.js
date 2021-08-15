import "./styles/styles.css"
import React, { Component } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import SelectedBeast from "./components/SelectedBeast"
import axios from "axios"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      data: "",
      url: "",
      title: "",
      description: "",
      search: "",
      selectedValue: [],
    }
  }

  componentDidMount = () => {
    axios
      .get(`http://localhost:8010/data`)
      .then((beastsData) =>
        this.setState({ selectedValue: beastsData.data, data: beastsData.data })
      )
      .catch((error) => console.log(error))
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
      selectedValue: this.state.data.filter((item) => {
        if (item.horns === parseInt(event.target.value)) return item
        else if (parseInt(event.target.value) === 0) return item
      }),
    })
  }

  render() {
    const { show, url, title, description, search, selectedValue, data } =
      this.state
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
