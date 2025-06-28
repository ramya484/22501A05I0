import { useEffect, useState } from 'react';

function Stats() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('shortUrls')) || [];
    setData(stored);
  }, []);

  return (
    <div className="main">
      <h2>Shortened URLs</h2>
      <div className="card p-4">
        {data.length === 0 ? (
          <p>No URLs found.</p>
        ) : (
          data.map((item, index) => (
            <div key={index} className="mb-2">
              <strong>Short:</strong>{' '}
              <a href={item.short} target="_blank" rel="noopener noreferrer">
                {item.short}
              </a>
              <br />
              <strong>Original:</strong> {item.original}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Stats;
