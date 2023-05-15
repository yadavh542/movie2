'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import LoadingPage from './loading';
import Movies from './components/Movies';
import MovieSearch from './components/MovieSearch';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch('http://www.omdbapi.com/?apikey=ce0de65b');
      const data = await res.json();
      setMovies(data.Search);
      console.log(data.Search);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome To Movies App</h1>
      <MovieSearch getSearchResults={(results) => setMovies(results)} />
      <Movies movies={movies} />
    </>
  );
};
export default HomePage;