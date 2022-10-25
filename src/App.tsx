import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { HomePage } from 'components/pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<div>Page Not Found</div>} />
        <Route index element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
