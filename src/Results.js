import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
       return (
         <div className="Results container text-center text-capitalize my-4">
            <section>
                <h2>{props.results.word}</h2>
                <div className="Phonetics">{props.results.phonetic}</div>
            </section>
                {props.results.meanings.map(function (meaning, index) {
                   return (
                     <section className="row justify-content-center"  key={index}>
                         <div className="col-md-8">
                            <Meaning meaning={meaning} />
                        </div>
                    </section>
                   );
            })}
       </div>
     );
 } else {
    return null;
 }

}
