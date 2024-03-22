import React, { useState } from 'react';
import Result from './Result'
import SearchBar from './searchBar'
import Multi from './Multi'

export default function App() {
  const [searchInput, setsearchInput] = useState('');
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <SearchBar
        setsearchInput={setsearchInput}
        searchInput={searchInput}
        results={results}
      />
      <hr/>
      <Result
        searchInput={searchInput}
        results={results}
        setResults={setResults}
      />
      <Multi results={results} /> *
    </div>
  );
}
