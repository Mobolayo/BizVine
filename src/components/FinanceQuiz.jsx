import '../App.css';
import Flashcard from './FlashCard';
import Navbar from './Navbar'; 
import { useState } from 'react';

const bizQuestions = [
  { question: 'Beta means?', answer: 'Stock volatility relative to the market' },
  { question: '3 main financial statements', answer: 'Income Statement, Balance Sheet, Cash Flow Statement' },
  { question: '3 main valuation methodologies', answer: 'Discounted Cash Flow, Precedent Transactions, Trading Comparables' },
  { question: 'Some common valuation multiples', answer: 'Price-to-Earnings, EV/EBITDA, Price-to-Book ratio' },
  { question: 'What is WACC?', answer: 'Weighted Average Cost of Capital is the discount rate used in a DCF' },
  { question: 'Synergy means?', answer: 'The potential value derived from an M&A transaction' },
  { question: '3 main types of synergy', answer: 'Cost & Revenue synergies' },
  { question: 'Formula for working capital?', answer: 'Current Assets - Current Liabilites' },
  { question: 'A bond is?', answer: 'A debt instrument issed by government or companies' },
  { question: 'Liquidity means?', answer: 'How quickly an asset can be converted to cash' }
]

const FinanceQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleNext = () => {
    setFeedback('');
    setIsFlipped(false);
    setGuess('');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bizQuestions.length);
  };

  const handleBack = () => {
    setFeedback(''); 
    setIsFlipped(false);
    setGuess('');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + bizQuestions.length) % bizQuestions.length);
  };

  const handleSubmit = () => {
    if (guess.toLowerCase() === bizQuestions[currentIndex].answer.toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback(`Incorrect! The correct answer is ${bizQuestions[currentIndex].answer}.`);
    }
    setIsFlipped(true); 
  };

  return (
    <div className="FinanceQuiz">
      <Navbar />
      <div className="header">
        <h2>Learn finance concepts!</h2>
        <h3>Choose the correct answer</h3>
        <h5>Number of cards: 10</h5>
      </div>

      <Flashcard
        question={bizQuestions[currentIndex].question}
        answer={bizQuestions[currentIndex].answer}
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
      />

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div className="feedback-section">
        <p>{feedback}</p>
      </div>

      <div className="navigation-buttons">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default FinanceQuiz;

FinanceQuiz.jsx
