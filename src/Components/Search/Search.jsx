import React from 'react'
import './search.css'

function Search() {
  return (
    <span className="searchBox">
      <input type="text" />
      <div className="search-helper">
        <div>
          <span className="commonbg search-icon" />
          <span className="search-text">Search</span>
        </div>
      </div>
    </span>
  )
}

export default Search
