import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css'


function Home() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const navigate = useNavigate();

  function handleShort() {
    if (!url.trim()) return;

    const code = Math.random().toString(36).substring(2, 8);
    const newShortUrl = `${window.location.origin}/redirect/${code}`;

    let stored = JSON.parse(localStorage.getItem('shortUrls')) || [];
    stored.push({ original: url, short: newShortUrl });
    localStorage.setItem('shortUrls', JSON.stringify(stored));

    setShortUrl(newShortUrl);
  }

  return (
    <div className="main">
      <h2>URL SHORTENER</h2>
      <div className="card p-4">
        <h3>Enter the URL:</h3>
        <input type="text" className="form-control mb-2" value={url} onChange={(e) => setUrl(e.target.value)} />
        <button className="btn btn-primary mb-2 w-100" onClick={handleShort}> Shorten URL </button>
        <button className="btn btn-secondary w-100" onClick={() => navigate('/stats')}> Open Stats Page</button>


        {shortUrl && (
          <div className="mt-3">
            <strong>Shortened URL:</strong>{' '}
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
