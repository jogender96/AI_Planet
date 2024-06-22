import React from 'react';
import { useParams } from 'react-router-dom';
import QuestionForm from '../components/QuestionForm';

const QuestionPage = () => {
  const { documentId } = useParams();

  return (
    <div>
      <h2>Ask Questions</h2>
      <QuestionForm documentId={documentId} />
    </div>
  );
};

export default QuestionPage;
