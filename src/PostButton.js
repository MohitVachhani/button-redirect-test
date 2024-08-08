// src/PostButton.js
import React, { useState } from "react";

const PostButton = ({ url, buttonText, postData }) => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseData(data); // Store the response data

        // Extract redirectURL and open it in a new tab
        if (data.redirectURL) {
          window.open(data.redirectURL, "_blank");
        }
      } else {
        setError(`Error: ${response.statusText}`);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
      {responseData && (
        <div>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div style={{ color: "red" }}>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default PostButton;
