import React, { useState } from 'react';
import { askQuestion } from '../services/api';

const QuestionForm = ({ documentId }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await askQuestion(documentId, question);
      setAnswer(response.answer);
    } catch (error) {
      console.error('Error asking question:', error);
      setError('Error asking question.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question"
        />
        <button type="submit">Ask</button>
      </form>
      {error && <p>{error}</p>}
      {answer && <p>{answer}</p>}
    </div>
  );
};

export default QuestionForm;
