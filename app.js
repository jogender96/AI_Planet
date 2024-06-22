import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UploadPage from './pages/UploadPage';
import QuestionPage from './pages/QuestionPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={UploadPage} />
          <Route path="/questions/:documentId" component={QuestionPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
