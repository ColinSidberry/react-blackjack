
import './App.css';
import Cards from "./Cards"
import {pickTwoCards} from "./pickCards"

const twoCards = pickTwoCards();

function App() {
  return (
    <div>
     <Cards cards = {twoCards} />
    </div>
  );
}

export default App;
