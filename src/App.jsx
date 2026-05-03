import React, { useEffect } from 'react';
import JokeCard from './components/JokeCard';

function App() {
  const [jokes, setJokes] = React.useState([]);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    const fetchJokes = async () => {
      const url = `https://api.freeapi.app/api/v1/public/randomjokes?page=${page}`;
      const options = {method: 'GET', headers: {accept: 'application/json'}};

      try {
        const response = await fetch(url, options);
        const fetchedJokes = await response.json();
        console.log(fetchedJokes.data.data);
        setJokes(fetchedJokes.data.data); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchJokes();
  }, [page]);
 

  return (
    <div className="app-container">
      <header className="header">
        <h1>Joke Central</h1>
        <p>A collection of the finest Chuck Norris facts.</p>
      </header>
      
      <main className="jokes-grid">
        {jokes.map((joke) => (
          <JokeCard key={joke.id} joke={joke} />
        ))}
      </main>

      <div className="pagination">
        <button 
          className="btn" 
          onClick={() => setPage(p => Math.max(1, p - 1))} 
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="page-info">Page {page}</span>
        <button 
          className="btn" 
          onClick={() => setPage(p => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
