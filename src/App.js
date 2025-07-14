import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
  
      <header className="App-header"> Dictionary </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer"> <small>Coded by <a href='https://github.com/Nay-nay93' target='_blank' rel="noopener noreferrer"> Naomi Greco</a> and hosted on <a href='https://cute-jalebi-ac6e93.netlify.app/' target='_blank' rel="noopener noreferrer"> Netlify</a> </small></footer>
      </div>
    </div>
  );
}

