import React from 'react'
import './App.css';
const List = ({item,searchInput}) => {
    
    function boldString (fString, bString) {
 
        let regex = new RegExp(bString, 'gi');
        const newText= fString.replace(regex, `<b>$&</b>`);
        return <div
        dangerouslySetInnerHTML={{
          __html: newText,
        }}
      ></div>
      }
  return (
    <div className='list'>
        <img src={item.image} height={60} width={60} alt='' />
        <div 
        style={
            {border:'none', marginLeft:'10px', textAlign:'start',
            fontSize:'22px', paddingBottom:'3px'}
            }>
            {boldString(item.name,searchInput)!==null && boldString(item.name,searchInput) }
            {item.episode.length>1 ?
            (`${item.episode.length} Episodes`):
            (`${item.episode.length} Episode`)}
        </div>
    </div>
  )
}

export default List