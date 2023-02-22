// import PropTypes from "prop-types";

export const FeedbackOptions = ({leaveFeedback, options}) => {
    
    return (

        <div>
            {options.map((option, index) => { return <button key={index} onClick={() => leaveFeedback(option)} type="button">{option}</button> })}
        </div>
        
    );
}