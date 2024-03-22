import React from 'react'
import {useState} from "react"
import './App.css';
function SearchBar({setsearchInput,searchInput, results}) {

    const onChange =(e)=>{
        setsearchInput(e.target.value)
    }
    
  return (
    <div className='searchBar'>
      <h2>Rick and Morty Character Searcher</h2>
        <input type='search'
        placeholder='Search for character'
        value={searchInput}
        onChange={onChange}
        />
      
    </div>
  )
}

export default SearchBar