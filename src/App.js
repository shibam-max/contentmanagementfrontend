import React from 'react';
import ContentSubmissionForm from './components/ContentSubmissionForm';
import ContentPreview from './components/ContentPreview';

function App() {
  return (
    <div>
      <ContentSubmissionForm />
      <hr />
      <ContentPreview />
    </div>
  );
}

export default App;
