import React from 'react'
import { useEffect, useState } from "react";
import List from './List';

const Result = ({searchInput,setResults, results}) => {
    
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://rickandmortyapi.com/api/character/?name=${searchInput}`)
        .then(res=>res.json())
        .then(data=> setResults(data.results))
        setLoading(false)
        console.log(results)
        results==undefined && setTimeout(() => {
            alert('TYPE ENGLISH CHARACTER OR PROPER WORD')
        }, 100);

    }, [searchInput])
    
  return (
    <div>
        <div 
        style={{textAlign:'center',background:'lightblue', 
        marginLeft:'40%', marginRight:'40%',
        }}>
            {loading && 'loading...' }
        </div>
        <div className='outerLine'> 
            {searchInput.length>0 && results !== undefined  && (
                <ul className='results'>
                    {results.map((item)=>(
                    <li key={item.id}>
                        <List item={item} searchInput={searchInput} loading={loading}/>
                    </li>
                    ))}
                </ul>) }
            
        </div>
    </div>
    
  )
}

export default Result