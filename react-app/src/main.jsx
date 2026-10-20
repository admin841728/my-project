import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '100px' }}>
      <h1>Hello from React!</h1>
      <p>My React application is running inside Docker on Amazon Linux.</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
