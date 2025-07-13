import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState({});

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data);
    }

    function search(event) {
        event.preventDefault();

        let apiKey = "13c9444ao05d100014e814t7f46bd8da";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }


    function handleKeywordChange(event) {
        setKeyword(event.target.value); 
    }

     return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" id="dictionary-search" onChange= {handleKeywordChange} />
        </form>
        <Results results={results} />
    </div>
    );
}