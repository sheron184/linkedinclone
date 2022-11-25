import { useState } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Welcome from './pages/Welcome';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Welcome></Welcome>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
