
// import PropTypes from "prop-types";
import { Notification } from "../Notification/Notification";

export const Statistics= ({good, neutral, bad, total, positivePercentage}) => {
    
    if (good > 0 || neutral > 0 || bad > 0) {
        return (
            <div>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {positivePercentage}%</p>
            </div>
            
        )         
        } else { return (<Notification message={"There is no feedback"} />)  };
    }




        
        
