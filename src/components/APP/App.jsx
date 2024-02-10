import { Component } from 'react';
import {Container, StatisticsTitle} from './App.styled'

import Feedback from '../Feedback/Feedback';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = (good, neut, bad) => {
    return good + neut + bad;
  };

  countPositiveFeedbackPercentage = (good, neut, bad) => {
    const total = this.countTotalFeedback(good, neut, bad);
    return total === 0 ? 0 : ((good / total) * 100).toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
          <StatisticsTitle>Statistics</StatisticsTitle>
          {this.countTotalFeedback(good, neutral, bad) === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </Container>
    );
  }
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
