import { useState } from 'react';

import { GlobalStyle } from '../GlobalStyles';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from '../components/Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [optionsState, setOptionsState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = optionsState;

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const leaveFeedback = option => {
    setOptionsState(prevState => {
      return { ...prevState, [option]: prevState[option] + 1 };
    });
  };

  const countPositiveFeedbackPercentage = () => {
    if (good) {
      return ((good / countTotalFeedback()) * 100).toFixed(2);
    } else {
      return 0;
    }
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(optionsState)}
          leaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
      <GlobalStyle />
    </>
  );
};
