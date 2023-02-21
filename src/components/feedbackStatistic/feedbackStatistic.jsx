import { Component } from "react";
import PropTypes from "prop-types";

export class Feedbacks extends Component {
    state = {
  good: 0,
  neutral: 0,
  bad: 0
    }
    
    
    leaveFeedback = (buttonName) => {
        this.setState(prevState => {
            return {[buttonName]: prevState[buttonName] + 1}
        })
    }

    render() {
        return (
            <><h2>Please leave feedback</h2>
            <ul>
                    <li><button onClick={() => {this.leaveFeedback("good")}}>Good</button></li>
                <li><button onClick={() => {this.leaveFeedback("neutral")}}>Neutral</button></li>
                <li><button onClick={() => {this.leaveFeedback("bad")}}>Bad</button></li>
                </ul>
                <h2>Statistics</h2>
            <ul>
                    <li>Good: {this.state.good}</li>
                    <li>Neutral: {this.state.neutral}</li>
                    <li>Bad: {this.state.bad}</li>
            </ul></>
        )
    }
}
