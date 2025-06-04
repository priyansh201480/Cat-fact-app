//Create a very simple web page with a single button. When the button is clicked, it should fetch a random "fact" from a public API (e.g., https://catfact.ninja/fact for cat facts, or a similar simple public API) and display it on the page. Use async/await for the API call.


import React, { useState } from 'react';

function App() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://catfact.ninja/fact');
      const data = await res.json();
      setFact(data.fact)
    } catch {
      setFact('Could not fetch a fact.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '1rem',
      background: '#1e1e1e',
      color: '#fff'
    }}>
      <div>
        <h1 >Random Cat Fact</h1>
        <button onClick={fetchFact}
            style={{  padding: '10px 20px',
            fontSize: '18px',
            border: '2px solid #fff',
            borderRadius: '5px',
            backgroundColor: 'transparent',
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginTop: '15px',
            marginBottom: '1.5rem' }}>
          Get Cat Fact
        </button>
        <p style={{ fontSize: '24px' }}>{loading ? 'Loading...' : fact}</p>

      </div>
    </div>
  );
}

export default App;
