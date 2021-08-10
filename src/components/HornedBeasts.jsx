import { Card, Button } from "react-bootstrap"
import React, { Component } from "react"

class HornedBeasts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: 0,
    }
  }
  handleFavorites = () => {
    this.setState({ favorites: this.state.favorites + 1 })
  }
  render() {
    const { title, url, description, onShow } = this.props
    const { favorites } = this.state
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            className="beastImg"
            variant="top"
            src={url}
            alt={description}
            title={title}
            onClick={onShow}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Favorites:{favorites}❤️</Card.Text>
            <Button onClick={this.handleFavorites}>Like</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default HornedBeasts
