import { useState } from 'react';
import './App.css';
import QuizView from './Components/QuizView';
import ScoreView from './Components/ScoreView';

function App() {
  const questions = [
    {
      question: "Which of the following is the correct name of React.js?",
      answers: [
        { text: "React" }, 
        { text: "React.js" },
        { text: "ReactJS" },
        { text: "All of the above", isCorrect: true }
      ],
    },
    {
      question: "What is a state in React?",
      answers: [
        { text: "A permanent storage." }, 
        { text: "Internal storage of the component.", isCorrect: true },
        { text: "External storage of the component." },
        { text: "None of the above." }
      ],
    },
    {
      question: "What are the two ways to handle data in React?",
      answers: [
        { text: "State & Props", isCorrect: true }, 
        { text: "Services & Components"},
        { text: "State & Services" },
        { text: "State & Component" }
      ],
    },
    {
      question: "Which of the following option is correct in the case of the Babel?",
      answers: [
        { text: "Babel is a Compiler." }, 
        { text: "Babel is a Transpilar." },
        { text: "None of the above." },
        { text: "Both A and B are correct.", isCorrect: true }
      ],
    },
    {
      question: "Does React.js create a VIRTUAL DOM in the memory?",
      answers: [
        { text: "TRUE", isCorrect: true }, 
        { text: "FALSE" },
        { text: "Can be true or false" },
        { text: "Cannot say"}
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState (false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    // check score
    if (isCorrect) setScore(score + 1);

    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else setIsQuizOver(true);
  };

  const handleResetClick = () => {
    setScore(0);
    setCurrentQuestion(0);
    setIsQuizOver(false);
  };

  return (
    <div className="App">
      {isQuizOver ? (
        <ScoreView handleResetClick={handleResetClick} score={score} />
       ) : (
        <QuizView
        questions={questions} 
        currentQuestion={currentQuestion} 
        handleAnswerClick={handleAnswerClick} 
      />
      )}

      {/*<ScoreView />*/}
    
      
    </div>
  );
}

export default App;
