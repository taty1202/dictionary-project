import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState([]);


  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setDefinition(response.data[0]);
    let apiUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=9`;
    let apiKey = "563492ad6f917000010000018e33eefa00bb4a7ab7157e56a2f972a1";
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <label>Search for a word</label>
            <input
              type="search"
              placeholder="Search..."
              defaultValue={props.defaultKeyword}
              autoFocus={true}
              className="form-control search-input"
              onChange={handleKeywordChange}
            />
          </form>
        </section>
        <Result definition={definition} />
        <Photos photos={photos} />
      </div>
  );
      
  } else {
    load();
    return "Loading..."
  }

}