// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  mangoClick = () => {
    this.setState(prevState => ({key1: prevState.key1 + 1}))
  }

  bananaClick = () => {
    this.setState(prevState => ({key2: prevState.key2 + 1}))
  }

  render() {
    const {key1, key2} = this.state
    return (
      <div className="main-bg">
        <div className="card">
          <h1>
            Bob ate <span>{key1}</span> mangoes <span>{key2}</span> bananas
          </h1>
          <div className="images-card">
            <div className="mango-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" onClick={this.mangoClick}>
                Eat Mango
              </button>
            </div>
            <div className="banana-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" onClick={this.bananaClick}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
