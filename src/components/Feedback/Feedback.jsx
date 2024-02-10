// import {useState} from 'react';
import { FeedbackList, Button } from './Feedback.styled';


const Feedback =  ({ options, onLeaveFeedback}) => {
  return (
    <FeedbackList> 
        {options.map((option, index) => {
            return (
                <li key={index}>
                  <Button
                    type="button"
                    onClick={() => {
                      onLeaveFeedback(option);
                    }}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </Button>
                </li>
              );
            })}
          </FeedbackList>
        );
}
    
      

export default Feedback;