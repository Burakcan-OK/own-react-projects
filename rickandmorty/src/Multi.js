import React from 'react';
import { useState, useEffect } from 'react';
import Select from 'react-select'
import './App.css'; 
function Multi() {
  
  const [characters, setCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
      .then(res=>res.json())
      .then(response => {
        const characterOptions = response.results.map(character => ({
          label: character.name,
          value: character.image,
          episode:character.episode.length,
          id:character.id,
        }));
        setCharacters(characterOptions);
        console.log(characterOptions)
      })
      .catch(error => {
        console.error('Error fetching character data:', error)
        alert('Please Type Proper Character Name');
      });
  }, [searchValue]);

  // const filteredOptions = characters.filter(character =>
  //   character.label.toLowerCase().includes(searchValue.toLowerCase(),
  //   )
  // );

  function boldString (fString, bString) {
 
    let regex = new RegExp(bString, 'gi');
    const newText= fString.replace(regex, `<b>$&</b>`);
    return <div
    dangerouslySetInnerHTML={{
      __html: newText,
    }}
  ></div>
  }
  const renderCharacterOption = (option) => {
    const { value, label, episode } = option.data;
    return (
      <div {...option.innerProps} 
      style={{
        marginTop:'-4px',
        display:'flex',
        flexDirection:'row',
        fontSize:'25px',
        padding:'10px',
        borderTop:'2px solid gray',
        }}>
        <img src={value} alt={label} style={{ width: '50px', height: '50px', marginRight: '5px', borderRadius:'10px' }} />
        <div
        style={{marginLeft:'10px'}}>
        {boldString(label,searchValue)}
        {episode>1 ?
            (`${episode} Episodes`):
            (`${episode} Episode`)}
        </div>
        
      </div>
    );
  };

        return (
          <div>
            <div className='drop-res'>
              {selectedCharacters.map(character => (
                <div className='drop-res-context' key={character.value}>
                  <img
                    src={character.value}
                    alt={character.label}
                  />
                  {character.label}
                  <br />
                  {`${character.episode} episode`}
                </div>
              ))}
            </div>
            <h2>Rick and Morty Character Selector</h2>
            <div className="multi-select" >
            <Select
              options={characters}
              value={selectedCharacters}
              onChange={setSelectedCharacters}
              onInputChange={value => setSearchValue(value)}
              isMulti
              className="multi-select-dropdown"
              components={{ Option: renderCharacterOption }}
            />
            </div>
          </div>
        );
      }

export default Multi;
