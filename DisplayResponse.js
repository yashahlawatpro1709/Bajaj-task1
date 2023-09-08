import React from 'react';

function DisplayResponse({ response }) {
  return (
    <div>
      <h2>API Response</h2>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}

export default DisplayResponse;
