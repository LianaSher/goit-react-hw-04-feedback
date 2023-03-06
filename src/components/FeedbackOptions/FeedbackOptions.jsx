import PropTypes from 'prop-types';

import {
  OptionsContainer,
  Button,
} from '../FeedbackOptions/feedbackOptions.styled';

export const FeedbackOptions = ({ leaveFeedback, options }) => {
  return (
    <OptionsContainer>
      {options.map((option, index) => {
        return (
          <Button
            key={index}
            onClick={() => leaveFeedback(option)}
            type="button"
          >
            {option}
          </Button>
        );
      })}
    </OptionsContainer>
  );
};

FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
