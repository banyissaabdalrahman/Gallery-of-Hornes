import React, { Component } from "react"
import { Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap"
class Header extends Component {
  render() {
    const { onSearch, onSelectedValue } = this.props
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="navbarScroll" className="navbarCollapse">
          <Navbar.Brand>Gallery of Hornes</Navbar.Brand>
          <Form className="navForm">
            <Form.Select onChange={onSelectedValue}>
              <option value="0">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">woow</option>
            </Form.Select>
          </Form>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onChange={onSearch}
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header
