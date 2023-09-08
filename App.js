import React, { useState } from 'react';
import PostRequestForm from './PostRequestForm';
import GetRequestButton from './GetRequestButton';
import DisplayResponse from './DisplayResponse';
import api from './api'; // Import the Axios instance

function App() {
  const [postResponse, setPostResponse] = useState(null);

  const postData = async () => {
    try {
      const response = await api.post('/bfhl', {
        data: ["M", "1", "334", "4", "B"]
      });
      setPostResponse(response.data);
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };

  return (
    <div>
      <h1>API Interaction Example</h1>
      <PostRequestForm postData={postData} /> {/* Pass the postData function as a prop */}
      <GetRequestButton />
      <DisplayResponse postResponse={postResponse} /> {/* Pass the postResponse data as a prop */}
    </div>
  );
}

export default App;
