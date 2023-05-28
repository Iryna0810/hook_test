import { useState, useEffect } from "react";
import { FeedbackOptions } from "./Feedback/Feedback";
import { Statistic } from "./Statistic/Statistic";
import { Title } from "./Title/Title";
import { AppUseState } from './useState/useState'
import { AppUseEffect } from './useEffect/useEffect';
import {Clock} from './Clock/Clock'
// import css from "../feedback.module.css";


export function App () {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = (event) => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default: return;
    }    
               
  }

  const total = () => {
    // const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    return total;
  }
  
  
  const positivePercentage = () => {
    const total = good + bad + neutral;
    const pozPercentage = good / total * 100;
    return pozPercentage;
    
  }
  

  return(
    <div 
      style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#fff',
        backgroundColor: 'rgb(88, 88, 237)',
        width: '700px',
        height: 'auto',
        padding:'30px',
        margin: '0 auto',
        borderRadius: '10px',
      }}>
      
      <AppUseState></AppUseState>
      <AppUseEffect></AppUseEffect>
      <Title
        title="Please leave feedback"
      >
        <FeedbackOptions
         onLeaveFeedback={handleIncrement}
         options = { ['good', 'bad', 'neutral' ]}
              />
      
      <Statistic
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positiveFeedback = {positivePercentage}
        />
      </Title>
      <Clock></Clock>
    </div>
    )

};
