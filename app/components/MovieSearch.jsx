'use client';
import { useEffect, useState } from 'react';

const MovieSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('fast');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://www.omdbapi.com/?apikey=ce0de65b&s=${query}`);
    const movies = await res.json();
    getSearchResults(movies);
  };

  useEffect(async()=>{
    const res = await fetch(`http://www.omdbapi.com/?apikey=ce0de65b&s=${query}`);
    const movies = await res.json();
    getSearchResults(movies);
  },[]);

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        type='text'
        className='search-input'
        placeholder='Search Movies...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  );
};
export default MovieSearch;