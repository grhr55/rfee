import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Heder from './components/Heder';

function App() {


  return (
    <Router>
      <Routes>
           <Route path="*" element={<Heder />} />
      </Routes>
    </Router>
  );
}


export default App
