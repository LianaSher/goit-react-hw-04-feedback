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

    countTotalFeedback = () => {
        const values = Object.values(this.state);
       return values.reduce((previousValue, number) => {
  return previousValue + number;
}, 0);
    }

    countPositiveFeedbackPercentage = () => {
        if(this.state.good) {return ( this.state.good / this.countTotalFeedback() * 100)}
        else { return 0 }
        
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
                    <li>Total: {this.countTotalFeedback()}</li>
                    <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
                </ul>
            </>
        )
    }
}
