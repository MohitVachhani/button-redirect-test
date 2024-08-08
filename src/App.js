// src/App.js
import React from "react";
import PostButton from "./PostButton";

function App() {
  const url = process.env.REACT_APP_API_URL;
  const appId = process.env.REACT_APP_ID;
  const postData = {
    appId: appId,
    userDetails: {
      name: "Savan Demo",
      federationId: "Za232",
      profilePicture:
        "https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942408_1280.jpg",
      tags: {
        Region: "West",
        State: "Gujarat",
        Cluster: "Surat",
        DC: "Surat DC1",
        "Joining Date": "2024-05-27",
        Role: "DC Heads",
        "Outscan User": "Yes",
        Source: "SATHi",
      },
      managerDetails: {
        name: "Savan",
        federationId: "1234567",
      },
    },
  };

  return (
    <div className="App">
      <h1>Post Request Button Example</h1>
      <PostButton
        url={url}
        buttonText="Send POST Request"
        postData={postData}
      />
    </div>
  );
}

export default App;
