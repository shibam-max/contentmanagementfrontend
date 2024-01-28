import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ContentSubmissionForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mockFileLink, setMockFileLink] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await axios.post('http://localhost:8081/content/submit', {
        title,
        description,
        mockFileLink,
      });

      setSubmissionStatus('Content submitted successfully');
      
      setTitle('');
      setDescription('');
      setMockFileLink('');
    } catch (error) {
      console.error('Error submitting content:', error);
      setSubmissionStatus('Error submitting content. Please try again.');
     
    }
  };

  return (
    <div>
      <h2>Content Submission Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Mock File Link:</label>
        <input type="text" value={mockFileLink} onChange={(e) => setMockFileLink(e.target.value)} required />

        <button type="submit">Submit Content</button>
        {submissionStatus && <p>{submissionStatus}</p>}
      </form>
    </div>
  );
};

export default ContentSubmissionForm;
