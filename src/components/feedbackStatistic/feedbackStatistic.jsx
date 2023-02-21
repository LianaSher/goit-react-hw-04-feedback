import { Component } from "react";
// import PropTypes from "prop-types";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";

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
                    <FeedbackOptions options={Object.keys(this.state)}  leaveFeedback={this.leaveFeedback}/>
            
                <h2>Statistics</h2>
            <ul>
                    <li>Good: {this.state.good}</li>
                    <li>Neutral: {this.state.neutral}</li>
                    <li>Bad: {this.state.bad}</li>
            </ul></>
        )
    }
}
