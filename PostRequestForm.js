import React, { useState } from 'react';

function PostRequestForm() {
  const [data, setData] = useState([]);
  const [response, setResponse] = useState({});

  const handlePostRequest = () => {
    
    fetch('https://testbfhl.herokuapp.com/bfhl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(data);
      })
      .catch((error) => {
        console.error('Error making POST request:', error);
      });
  };

  const handleDataInputChange = (e) => {
    setData(e.target.value.split(','));
  };

  return (
    <div>
      <h2>Make a POST Request</h2>
      <textarea
        placeholder="Enter data (comma-separated)"
        onChange={handleDataInputChange}
        value={data.join(',')}
      />
      <button onClick={handlePostRequest}>Submit POST Request</button>
    </div>
  );
}

export default PostRequestForm;
