import './App.css';
import Tehatava10 from './tehtavat/Tehtava10';
import Tehtava6 from './tehtavat/Tehtava6';
import Tehtava7 from './tehtavat/Tehtava7';
import Tehtava8 from './tehtavat/Tehtava8';
import Tehtava9 from './tehtavat/Tehtava9';

function App() {
  return (
    <div className="App">
        <h2>6. tehtävä</h2>
        <Tehtava6 />
        <h2>7. tehtävä</h2>
        <Tehtava7 />
        <h2>8. tehtävä</h2>
        <Tehtava8 />
        <h2>9. tehtävä</h2>
        <Tehtava9 />
        <h2>10. tehtävä</h2>
        <Tehatava10 />
    </div>
  );
}

export default App;
