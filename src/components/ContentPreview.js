import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ContentPreview = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(null);
  const [previewError, setPreviewError] = useState('');

  const handlePreview = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get(`http://localhost:8081/content/search?title=${encodeURIComponent(title)}`);
      console.log('Server response:', response.data);
      setContent(response.data[0]); 
      setPreviewError('');
    } catch (error) {
      console.error('Error fetching content:', error);
      setPreviewError('Error fetching content. Please check the title.');
      setContent(null); 
    }
  };
  
  

  return (
    <div>
      <h2>Content Preview</h2>
      <form onSubmit={handlePreview}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <button type="submit">Preview Content</button>
        {previewError && <p style={{ color: 'red' }}>{previewError}</p>}
      </form>

      {content && (
        <div>
          <h3>Content Details</h3>
          <p><strong>Title:</strong> {content.title}</p>
          <p><strong>Description:</strong> {content.description}</p>
          <p><strong>Mock File Link:</strong> {content.mockFileLink}</p>
        </div>
      )}
    </div>
  );
};

export default ContentPreview;
