// import React from 'react'

// const App = () => {
// // to display: coordi - lon , lat , sunset , sunrise, humidity , wind , pressure , temp
//   const API_KEY = '6053382326b9dcb80ee5b8c0672e205f'
//   const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
//   return (
//     <div className='flex justify-center bg-#90bcc3d2'>
//       <input 
//       type='text'
//       className='w-48 border
//       border-slate-500 flex justify-centre
//       items-centre mt-10 rounded-md h-[32px]'
//       placeholder='          enter city name'
//       />
// <button className='text-white p-1 mt-10 bg-blue-900 rounded-lg ml-3
// w-20 h-full'>submit </button>
// <p className=''>
// coordinates
// <span> Latitude</span>
// <span>longtitude</span>


// </p>
//     </div>
//   )
// }

// export default App


// src/App.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './index.css';

// const API_KEY = '6053382326b9dcb80ee5b8c0672e205f';
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// function App() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);

//   const getWeather = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//       setWeather(response.data);
//       setError(null);
//     } catch (err) {
//       setError('City not found');
//       setWeather(null);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center">
//       <div className="bg-gray-100 p-10 rounded-lg shadow-lg text-center w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-5">Weather App</h1>
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name"
//           className="border p-2 w-full mb-5"
//         />
//         <button
//           onClick={getWeather}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Get Weather
//         </button>
//         {error && <p className="text-red-500 mt-5">{error}</p>}
//         {weather && (
//           <div className="mt-5">
//             <h2 className="text-xl font-semibold">{weather.name}</h2>
//             <p className="text-lg">{weather.weather[0].description}</p>
//             <p className="text-lg">Temperature: {weather.main.temp}°C</p>
//             <p className="text-lg">Humidity: {weather.main.humidity}%</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './index.css';

// const API_KEY = '6053382326b9dcb80ee5b8c0672e205f';
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// function App() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);

//   const getWeather = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//       setWeather(response.data);
//       setError(null);
//     } catch (err) {
//       setError('City not found');
//       setWeather(null);
//     }
//   };

//   const formatTime = (timestamp) => {
//     const date = new Date(timestamp * 1000);
//     return date.toLocaleTimeString();
//   };

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center">
//       <div className="bg-gray-100 p-10 rounded-lg shadow-lg text-center w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-5">Weather App</h1>
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name"
//           className="border p-2 w-full mb-5"
//         />
//         <button
//           onClick={getWeather}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Get Weather
//         </button>
//         {error && <p className="text-red-500 mt-5">{error}</p>}
//         {weather && (
//           <div className="mt-5">
//             <h2 className="text-xl font-semibold">{weather.name}</h2>
//             <p className="text-lg">{weather.weather[0].description}</p>
//             <p className="text-lg">Temperature: {weather.main.temp}°C</p>
//             <p className="text-lg">Humidity: {weather.main.humidity}%</p>
//             <p className="text-lg">Pressure: {weather.main.pressure} hPa</p>
//             <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
//             <p className="text-lg">Coordinates: {weather.coord.lon}, {weather.coord.lat}</p>
//             <p className="text-lg">Sunrise: {formatTime(weather.sys.sunrise)}</p>
//             <p className="text-lg">Sunset: {formatTime(weather.sys.sunset)}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


// sr


// src/App.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const API_KEY = '6053382326b9dcb80ee5b8c0672e205f';
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// const App = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);

//   const getWeather = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//       setWeather(response.data);
//       setError(null);
//     } catch (err) {
//       setError('City not found');
//       setWeather(null);
//     }
//   };

//   const formatTime = (timestamp) => {
//     const date = new Date(timestamp * 1000);
//     return date.toLocaleTimeString();
//   };

//   const appStyles = {
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     background: 'linear-gradient(to bottom, #f0c27b, #4b1248)', // Gradient colors for sunrise
//     animation: 'bg-animation 30s linear infinite',
//   };

//   const cardStyles = {
//     backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white card background
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     maxWidth: '400px',
//     width: '100%',
//     textAlign: 'center',
//   };

//   return (
//     <div style={appStyles}>
//       <div style={cardStyles}>
//         <h1 className="text-2xl font-bold mb-5">Weather App</h1>
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name"
//           className="border p-2 w-full mb-5"
//         />
//         <button
//           onClick={getWeather}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Get Weather
//         </button>
//         {error && <p className="text-red-500 mt-5">{error}</p>}
//         {weather && (
//           <div className="bg-gray-100 bg-opacity-75 p-5 rounded-lg shadow-lg text-center w-full mb-5">
//             <h2 className="text-xl font-semibold">{weather.name}</h2>
//             <p className="text-lg">{weather.weather[0].description}</p>
//             <p className="text-lg">Temperature: {weather.main.temp}°C</p>
//             <p className="text-lg">Humidity: {weather.main.humidity}%</p>
//             <p className="text-lg">Pressure: {weather.main.pressure} hPa</p>
//             <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
//             <p className="text-lg">Coordinates: {weather.coord.lon}, {weather.coord.lat}</p>
//             <p className="text-lg">Sunrise: {formatTime(weather.sys.sunrise)}</p>
//             <p className="text-lg">Sunset: {formatTime(weather.sys.sunset)}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;


// // src/App.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const API_KEY = '6053382326b9dcb80ee5b8c0672e205f';
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// const App = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);

//   const getWeather = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//       setWeather(response.data);
//       setError(null);
//     } catch (err) {
//       setError('City not found');
//       setWeather(null);
//     }
//   };

//   const formatTime = (timestamp) => {
//     const date = new Date(timestamp * 1000);
//     return date.toLocaleTimeString();
//   };

//   const appStyles = {
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     background: 'linear-gradient(to bottom, #FDDCC1, #FF9800)', // Gradient colors for sunset
//     animation: 'bg-animation 30s linear infinite',
//   };

//   const cardStyles = {
//     backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white card background
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     maxWidth: '400px',
//     width: '100%',
//     textAlign: 'center',
//   };

//   return (
//     <div style={appStyles}>
//       <div style={cardStyles}>
//         <h1 className="text-2xl font-bold mb-5">Weather App</h1>
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name"
//           className="border p-2 w-full mb-5"
//         />
//         <button
//           onClick={getWeather}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Get Weather
//         </button>
//         {error && <p className="text-red-500 mt-5">{error}</p>}
//         {weather && (
//           <div className="bg-gray-100 bg-opacity-75 p-5 rounded-lg shadow-lg text-center w-full mb-5">
//             <h2 className="text-xl font-semibold">{weather.name}</h2>
//             <p className="text-lg">{weather.weather[0].description}</p>
//             <p className="text-lg">Temperature: {weather.main.temp}°C</p>
//             <p className="text-lg">Humidity: {weather.main.humidity}%</p>
//             <p className="text-lg">Pressure: {weather.main.pressure} hPa</p>
//             <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
//             <p className="text-lg">Coordinates: {weather.coord.lon}, {weather.coord.lat}</p>
//             <p className="text-lg">Sunrise: {formatTime(weather.sys.sunrise)}</p>
//             <p className="text-lg">Sunset: {formatTime(weather.sys.sunset)}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;


// src/App.js

// src/App.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_KEY = '6053382326b9dcb80ee5b8c0672e205f'; // Replace with your OpenWeather API key
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// const App = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (city.length > 0) {
//       getWeather();
//     }
//   }, [city]);

//   const getWeather = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//       setWeather(response.data);
//       setError(null);
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.message) {
//         setError(err.response.data.message);
//       } else {
//         setError('City not found');
//       }
//       setWeather(null);
//     }
//   };

//   const formatTime = (timestamp) => {
//     const date = new Date(timestamp * 1000);
//     return date.toLocaleTimeString();
//   };

//   const appStyles = {
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     background: `url('https://img.freepik.com/premium-photo/desert-with-desert-landscape-mountains-background_131346-11956.jpg')`,
//     backgroundSize: 'cover',
//   };

//   const cardStyles = {
//     backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white card background
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     maxWidth: '400px',
//     width: '100%',
//     textAlign: 'center',
//   };

//   return (
//     <div style={appStyles}>
//       <div style={cardStyles}>
//         <h1 className="text-2xl font-bold mb-5">Weather App</h1>
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name"
//           className="border p-2 w-full mb-5"
//         />
//         <button
//           onClick={getWeather}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Get Weather
//         </button>
//         {error && <p className="text-red-500 mt-5">{error}</p>}
//         {weather && (
//           <div className="bg-gray-100 bg-opacity-75 p-5 rounded-lg shadow-lg text-center w-full mt-5">
//             <h2 className="text-xl font-semibold">{weather.name}</h2>
//             <p className="text-lg">{weather.weather[0].description}</p>
//             <p className="text-lg">Temperature: {weather.main.temp}°C</p>
//             <p className="text-lg">Humidity: {weather.main.humidity}%</p>
//             <p className="text-lg">Pressure: {weather.main.pressure} hPa</p>
//             <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
//             <p className="text-lg">Coordinates: {weather.coord.lon}, {weather.coord.lat}</p>
//             <p className="text-lg">Sunrise: {formatTime(weather.sys.sunrise)}</p>
//             <p className="text-lg">Sunset: {formatTime(weather.sys.sunset)}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_KEY = '6053382326b9dcb80ee5b8c0672e205f'; // Replace with your OpenWeather API key
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// const App = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (city.length > 0) {
//       getWeather();
//     }
//   }, [city]);

//   const getWeather = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//       setWeather(response.data);
//       setError(null);
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.message) {
//         setError(err.response.data.message);
//       } else {
//         setError('City not found');
//       }
//       setWeather(null);
//     }
//   };

//   const formatTime = (timestamp) => {
//     const date = new Date(timestamp * 1000);
//     return date.toLocaleTimeString();
//   };

//   const appStyles = {
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     background: `url('https://static.vecteezy.com/system/resources/previews/001/856/959/original/futuristic-city-landscape-with-sunset-future-theme-concept-background-vector.jpg')`,
//     backgroundSize: 'cover',
//     margin: 0,
//     fontFamily: 'Arial, sans-serif'
//   };

//   const cardStyles = {
//     backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white card background
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     maxWidth: '400px',
//     width: '100%',
//     textAlign: 'center',
//   };

//   const inputStyles = {
//     padding: '10px',
//     borderRadius: '10px',
//     border: '1px solid #ccc',
//     fontSize: '16px',
//     width: '100%',
//     marginBottom: '20px',
//   };

//   const buttonStyles = {
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '10px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//     backgroundColor: '#007BFF',
//     color: 'white',
//   };

//   const buttonHoverStyles = {
//     backgroundColor: '#0056b3',
//   };

//   return (
//     <div style={appStyles}>
//       <div style={cardStyles}>
//         <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Weather App</h1>
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name"
//           style={inputStyles}
//         />
//         <button
//           onClick={getWeather}
//           style={buttonStyles}
//           onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyles.backgroundColor}
//           onMouseOut={(e) => e.target.style.backgroundColor = buttonStyles.backgroundColor}
//         >
//           Get Weather
//         </button>
//         {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
//         {weather && (
//           <div style={{ backgroundColor: '#f7fafc', opacity: 0.75, padding: '20px', borderRadius: '10px', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)', textAlign: 'center', width: '100%', marginTop: '20px' }}>
//             <h2 style={{ fontSize: '20px', fontWeight: '600' }}>{weather.name}</h2>
//             <p style={{ fontSize: '18px' }}>{weather.weather[0].description}</p>
//             <p style={{ fontSize: '18px' }}>Temperature: {weather.main.temp}°C</p>
//             <p style={{ fontSize: '18px' }}>Humidity: {weather.main.humidity}%</p>
//             <p style={{ fontSize: '18px' }}>Pressure: {weather.main.pressure} hPa</p>
//             <p style={{ fontSize: '18px' }}>Wind Speed: {weather.wind.speed} m/s</p>
//             <p style={{ fontSize: '18px' }}>Coordinates: {weather.coord.lon}, {weather.coord.lat}</p>
//             <p style={{ fontSize: '18px' }}>Sunrise: {formatTime(weather.sys.sunrise)}</p>
//             <p style={{ fontSize: '18px' }}>Sunset: {formatTime(weather.sys.sunset)}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '6053382326b9dcb80ee5b8c0672e205f'; // Replace with your OpenWeather API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city.length > 0) {
      getWeather();
    }
  }, [city]);

  const getWeather = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
      setError(null);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('City not found');
      }
      setWeather(null);
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  const getBackgroundImage = () => {
    if (weather && weather.main.temp > 30) {
      return 'https://images.unsplash.com/photo-1624412175968-c0cd30bea6ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    } else {
      return 'https://static.vecteezy.com/system/resources/previews/001/856/959/original/futuristic-city-landscape-with-sunset-future-theme-concept-background-vector.jpg';
    }
  };

  const appStyles = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `url(${getBackgroundImage()})`,
    backgroundSize: 'cover',
    margin: 0,
    fontFamily: 'Arial, sans-serif'
  };
  const cardStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white card background
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  };

  const inputStyles = {
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
    marginBottom: '20px',
  };

  const buttonStyles = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    backgroundColor: '#007BFF',
    color: 'white',
  };

  const buttonHoverStyles = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={appStyles}>
      <div style={cardStyles}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Weather App</h1>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          style={inputStyles}
        />
        <button
          onClick={getWeather}
          style={buttonStyles}
          onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyles.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = buttonStyles.backgroundColor}
        >
          Get Weather
        </button>
        
        {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
        {weather && (
          <div style={{ backgroundColor: '#f7fafc', opacity: 0.75, padding: '20px', borderRadius: '10px', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)', textAlign: 'center', width: '100%', marginTop: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '600' }}>{weather.name}</h2>
            <p style={{ fontSize: '18px' }}>{weather.weather[0].description}</p>
            <p style={{ fontSize: '18px' }}>Temperature: {weather.main.temp}°C</p>
            <p style={{ fontSize: '18px' }}>Humidity: {weather.main.humidity}%</p>
            <p style={{ fontSize: '18px' }}>Pressure: {weather.main.pressure} hPa</p>
            <p style={{ fontSize: '18px' }}>Wind Speed: {weather.wind.speed} m/s</p>
            <p style={{ fontSize: '18px' }}>Coordinates: {weather.coord.lon}, {weather.coord.lat}</p>
            <p style={{ fontSize: '18px' }}>Sunrise: {formatTime(weather.sys.sunrise)}</p>
            <p style={{ fontSize: '18px' }}>Sunset: {formatTime(weather.sys.sunset)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

