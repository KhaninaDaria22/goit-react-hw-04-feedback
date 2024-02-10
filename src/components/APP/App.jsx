import { useState} from 'react';
import {Container, StatisticsTitle} from './App.styled'

import Feedback from '../Feedback/Feedback';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics'


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutra] = useState(0);
  const [bad, setBad] = useState(0);

  const  handleClick = option => {
    switch (option) {
      case 'good':
        setGood((prevGood) => prevGood + 1);
        break;
      case 'neutral':
        setNeutra((prevNeutlar) => prevNeutlar +1);
        break;
      case 'bad':
        setBad((prevBad) => prevBad + 1);
        break;
        default:
          return;
    }
  };

 const countTotalFeedback = () => {
    return good + neutral + bad;
  };

 const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : ((good / total) * 100).toFixed();
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <Feedback
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
        <StatisticsTitle>Statistics</StatisticsTitle>
        {countTotalFeedback(countTotalFeedback) === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </Container>
  );

}


export default App;















// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
