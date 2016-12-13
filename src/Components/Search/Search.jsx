import React from 'react'
import './Search.css'

function Search() {
  return (
    <span className="searchBox">
      <input type="text" />
      <div className="search-helper">
        <div>
          <span className="commonbg search-icon"></span>
          <span className="search-text">Search</span>
        </div>
      </div>
    </span>
  )
}

export default Search
