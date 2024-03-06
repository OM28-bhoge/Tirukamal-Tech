import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Registration from './Component/Registration';
import LoginPage from './Component/LoginPage';
import AttendancePage from './Component/AttendancePage';
import './App.css';
import axios from 'axios';
function App() {
  const [data, setData] = useState({});
  fetch('/Component/Registration', {
    method: 'GET'
})
.then(response => response.json())
.then(data => {
    console.log(data.message); // Print the message received from the Flask endpoint
    // You can perform any other actions here, such as updating state or navigating to another page in your React app
})
.catch(error => console.error('Error:', error));

  useEffect(() => {
    fetchData();
  }, []);
  const pythonFilePath = '/frontend/app.py';
  const fetchData = async () => {
//const axios = require('axios'); // legacy way

// Make a request for a user with a given ID
      axios.get('http://127.0.0.1:5000')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

      // Optionally the request above could also be done as
      axios.get('/user', {
          params: {
            ID: 12345
          }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

      // Want to use async/await? Add the async keyword to your outer function/method.
      async function getUser() {
        try {
          const response = await axios.get('http://127.0.0.1:5000');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/AttendancePage" element={<AttendancePage />} />
      </Routes>
    </Router>
  );
}

export default App;