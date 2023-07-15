import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import quizData from '../context/QuizContext';

function Quiz() {
  const navigate = useNavigate();
  const { currentQuestion, submitAnswer } = useQuiz(quizData);
  const [answerIndex, setAnswerIndex] = useState(null);

  const handleAnswerChange = (event) => {
    setAnswerIndex(parseInt(event.target.value, 10));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitAnswer(answerIndex);
    setAnswerIndex(null);
  };

  const isLastQuestion = currentQuestion.id === quizData.length;

  return (
    <div className="quiz-page">
      <div className="container">
        <div className="left-column">
          <h3>Importance of Solving Workplace Bias</h3>
          <p>
            Workplace bias can have a profound impact on organizational culture, employee morale, and the bottom line. When employees feel that they are treated unfairly, they may become disengaged, demotivated, and less productive. Workplace bias can also lead to high turnover rates and difficulty in attracting top talent. Therefore, it is essential for organizations to address and solve workplace bias.
          </p>
        </div>
        <div className="quiz-container">
          <h1>Bias Awareness Quiz</h1>
          <form onSubmit={handleSubmit} className="quiz-form">
            <div className="question-container">
              <h3>{currentQuestion.text}</h3>
              {currentQuestion.options.map((option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    id={`option${index}`}
                    name="answer"
                    value={index}
                    checked={index === answerIndex}
                    onChange={handleAnswerChange}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            <div className="button-container">
              <button type="submit">Submit Answer</button>
              {isLastQuestion && (
                <button onClick={() => navigate('/results')}>View Results</button>
              )}
            </div>
          </form>
        </div>
        <div className="right-column">
          <h3>How to Voice Out Against Workplace Bias</h3>
          <p>
            Speaking up against workplace bias can be challenging, but it is essential to create a more inclusive and diverse workplace. Here are some tips on how to voice out against workplace bias:
          </p>
          <ol>
            <li>Speak up in the moment</li>
            <li>Find allies</li>
            <li>Report incidents of bias</li>
            <li>Keep up with the latest news and educate yourself</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Quiz;