import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Compare from './pages/Compare';
import TEST from './pages/TEST';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Compare />} />
          <Route path="compare" element={<Compare />} />
          <Route path="test" element={<TEST />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;