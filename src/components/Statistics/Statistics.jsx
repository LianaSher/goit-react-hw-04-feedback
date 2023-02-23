
import PropTypes from "prop-types";
import { Notification } from "../Notification/Notification";

import { Item, Wrapper } from "../Statistics/statistics.styled";

export const Statistics= ({good, neutral, bad, total, positivePercentage}) => {
    
    if (good > 0 || neutral > 0 || bad > 0) {
        return (
            <div>
                <Item>Good:  <Wrapper>{good}</Wrapper></Item>
                <Item>Neutral: <Wrapper> {neutral}</Wrapper></Item>
                <Item>Bad: <Wrapper> {bad}</Wrapper></Item>
                <Item>Total: <Wrapper>{total}</Wrapper> </Item>
                <Item>Positive feedback: <Wrapper> {positivePercentage}%</Wrapper> </Item>
                
            </div>
            
        )         
        } else { return (<Notification message={"There is no feedback"} />)  };
    }

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}


        
        
