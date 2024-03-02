import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { Layout } from './common/Layout';
import Teachers from './pages/Teachers/Teachers';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="teachers" element={<Teachers />} />
      </Route>
    </Routes>
  );
}

export default App;
