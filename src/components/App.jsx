import { GlobalStyle } from "../GlobalStyles";
import { FeedbackOptions } from "../components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "../components/Section/Section";

import { Component } from "react";

export class App extends Component {
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
        if(this.state.good) {return ( this.state.good / this.countTotalFeedback() * 100).toFixed(2)}
        else { return 0 }
        
    } 

  render() {
    return (<>
      <Section title={"Please leave feedback"}>
           
                    <FeedbackOptions options={Object.keys(this.state)}  leaveFeedback={this.leaveFeedback}/>
        </Section>
     <Section title={"Statistics"}>
      
      
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
        
      </Section>
      <GlobalStyle/>
      </>
  )
}
}

// export const App = () => {
//   return (
    
//       <Section title={"Please leave feedback"}>
//       <Feedbacks />
//       <GlobalStyle/>
//         </Section>
      
      
    
//   );
// };
