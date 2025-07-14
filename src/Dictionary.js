import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [images, setImages] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function handleImageResponse(response) {
        setImages(response.data.photos);
    }

    function search(event) {
        event.preventDefault();

        let apiKey = "13c9444ao05d100014e814t7f46bd8da";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
        axios.get(imageApiUrl).then(handleImageResponse);
    }


    function handleKeywordChange(event) {
        setKeyword(event.target.value); 
    }

     return (
    <div className="Dictionary">
        <section>
        <form onSubmit={search}>
            <input type="search" id="dictionary-search" onChange= {handleKeywordChange} />
        </form>
        </section>
        <Results results={results} />
        <Photos photos={images} />
    </div>
    );
}