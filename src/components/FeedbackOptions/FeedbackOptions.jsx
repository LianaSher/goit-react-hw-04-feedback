// import PropTypes from "prop-types";

export const FeedbackOptions = ({leaveFeedback, options}) => {
    console.log(options);
    return (

        <div>
            {options.map((option) => { return <button onClick={() => leaveFeedback(option)} type="button">{option}</button> })}
        </div>
        
    );
}