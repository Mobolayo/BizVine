import React from 'react';
// import './FlashCard.css';

const Flashcard = ({ question, answer, isFlipped, setIsFlipped }) => {

  const handleFlip = () => {
    setIsFlipped(!isFlipped); // Toggle the flip state
  };

  return (
    <div className="flashcard-wrapper">
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flashcard-inner">
                <div className="flashcard-front">
                    <h2>{question}</h2>
                </div>
                <div className="flashcard-back">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Flashcard;