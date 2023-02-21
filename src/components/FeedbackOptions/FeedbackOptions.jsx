import PropTypes from "prop-types";

export const FeedbackOptions = ({leaveFeedback}) => {
    
    return (
        <div>
            <button onClick={()=>leaveFeedback("good")} type="button">Good</button>
                <button onClick={()=>leaveFeedback("neutral")} type="button">Neutral</button>
                <button onClick={()=>leaveFeedback("bad")} type="button">Bad</button>
        </div>
    );
}