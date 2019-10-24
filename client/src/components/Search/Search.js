import React from 'react';
import './Search.css';

function Search({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group mx-sm-3">
        <label htmlFor="Query">
          <strong>Movie Search</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Ready Player One"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="center">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-md btn-secondary"
        >
          Search
          </button>
      </div>
    </form>
  );
}


export default Search;